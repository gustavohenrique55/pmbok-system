import { UserRepository } from '../../../infrastructure/database/repositories/UserRepository.js';
import { SessionRepository } from '../../../infrastructure/database/repositories/SessionRepository.js';
import { EncryptionService } from '../../services/EncryptionService.js';
import { TokenService, TokenPair } from '../../services/TokenService.js';
import { UnauthorizedError } from '../../../shared/errors/index.js';

export interface LoginUserInput {
  email: string;
  password: string;
  userAgent: string;
  ipAddress: string;
}

export interface LoginUserOutput {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  tokens: TokenPair;
}

export class LoginUser {
  constructor(
    private userRepository: UserRepository,
    private sessionRepository: SessionRepository,
    private encryptionService: EncryptionService,
    private tokenService: TokenService
  ) {}

  async execute(input: LoginUserInput): Promise<LoginUserOutput> {
    // Find user by email
    const user = await this.userRepository.findByEmail(input.email);

    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    // Check if account is locked
    if (user.isLocked()) {
      throw new UnauthorizedError('Account is temporarily locked. Please try again later.');
    }

    // Check if account is active
    if (!user.isActive) {
      throw new UnauthorizedError('Account is deactivated');
    }

    // Verify password
    const isPasswordValid = await this.encryptionService.comparePassword(
      input.password,
      user.password
    );

    if (!isPasswordValid) {
      // Increment failed login attempts
      user.incrementFailedLogins();
      await this.userRepository.update(user.id, {
        failedLogins: user.failedLogins,
        lockedUntil: user.lockedUntil,
      });

      throw new UnauthorizedError('Invalid email or password');
    }

    // Reset failed logins and update last login
    user.resetFailedLogins();
    user.updateLastLogin(input.ipAddress);

    await this.userRepository.update(user.id, {
      failedLogins: 0,
      lockedUntil: null,
      lastLoginAt: user.lastLoginAt,
      lastLoginIp: user.lastLoginIp,
    });

    // Generate tokens
    const tokens = this.tokenService.generateTokenPair({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Store refresh token session
    const refreshExpiration = new Date();
    refreshExpiration.setDate(refreshExpiration.getDate() + 7); // 7 days

    await this.sessionRepository.create({
      userId: user.id,
      refreshToken: tokens.refreshToken,
      userAgent: input.userAgent,
      ipAddress: input.ipAddress,
      expiresAt: refreshExpiration,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      tokens,
    };
  }
}
