import { UserRepository } from '../../../infrastructure/database/repositories/UserRepository.js';
import { SessionRepository } from '../../../infrastructure/database/repositories/SessionRepository.js';
import { TokenService, TokenPair } from '../../services/TokenService.js';
import { UnauthorizedError } from '../../../shared/errors/index.js';

export interface RefreshTokenInput {
  refreshToken: string;
  userAgent: string;
  ipAddress: string;
}

export class RefreshToken {
  constructor(
    private userRepository: UserRepository,
    private sessionRepository: SessionRepository,
    private tokenService: TokenService
  ) {}

  async execute(input: RefreshTokenInput): Promise<TokenPair> {
    // Find session by refresh token
    const session = await this.sessionRepository.findByRefreshToken(input.refreshToken);

    if (!session) {
      throw new UnauthorizedError('Invalid refresh token');
    }

    // Check if session is expired
    if (new Date() > session.expiresAt) {
      await this.sessionRepository.deleteByRefreshToken(input.refreshToken);
      throw new UnauthorizedError('Refresh token expired');
    }

    // Find user
    const user = await this.userRepository.findById(session.userId);

    if (!user || !user.isActive) {
      await this.sessionRepository.deleteByRefreshToken(input.refreshToken);
      throw new UnauthorizedError('User not found or inactive');
    }

    // Delete old session (token rotation)
    await this.sessionRepository.deleteByRefreshToken(input.refreshToken);

    // Generate new tokens
    const tokens = this.tokenService.generateTokenPair({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Create new session
    const refreshExpiration = new Date();
    refreshExpiration.setDate(refreshExpiration.getDate() + 7);

    await this.sessionRepository.create({
      userId: user.id,
      refreshToken: tokens.refreshToken,
      userAgent: input.userAgent,
      ipAddress: input.ipAddress,
      expiresAt: refreshExpiration,
    });

    return tokens;
  }
}
