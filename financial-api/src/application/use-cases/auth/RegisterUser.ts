import { UserRepository } from '../../../infrastructure/database/repositories/UserRepository.js';
import { EncryptionService } from '../../services/EncryptionService.js';
import { TokenService, TokenPair } from '../../services/TokenService.js';
import { EmailService } from '../../services/EmailService.js';
import { ConflictError, BadRequestError } from '../../../shared/errors/index.js';
import { Role } from '../../../domain/enums/index.js';
import { PASSWORD_MIN_LENGTH } from '../../../shared/constants/index.js';

export interface RegisterUserInput {
  email: string;
  password: string;
  name: string;
  cpf?: string;
  phone?: string;
}

export interface RegisterUserOutput {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  tokens: TokenPair;
}

export class RegisterUser {
  constructor(
    private userRepository: UserRepository,
    private encryptionService: EncryptionService,
    private tokenService: TokenService,
    private emailService: EmailService
  ) {}

  async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {
    // Validate password strength
    if (input.password.length < PASSWORD_MIN_LENGTH) {
      throw new BadRequestError(`Password must be at least ${PASSWORD_MIN_LENGTH} characters`);
    }

    // Check if email already exists
    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser) {
      throw new ConflictError('Email already registered');
    }

    // Check if CPF already exists
    if (input.cpf) {
      const existingCpf = await this.userRepository.findByCpf(input.cpf);
      if (existingCpf) {
        throw new ConflictError('CPF already registered');
      }
    }

    // Hash password
    const hashedPassword = await this.encryptionService.hashPassword(input.password);

    // Create user
    const user = await this.userRepository.create({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      cpf: input.cpf ?? null,
      phone: input.phone ?? null,
      role: Role.USER,
      isActive: true,
      failedLogins: 0,
      lockedUntil: null,
      lastLoginAt: null,
      lastLoginIp: null,
      avatar: null,
    });

    // Generate tokens
    const tokens = this.tokenService.generateTokenPair({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Send welcome email (async, don't wait)
    this.emailService.sendWelcomeEmail(user.email, user.name).catch(() => {
      // Log error but don't fail registration
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
