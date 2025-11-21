import { Request, Response, NextFunction } from 'express';
import { RegisterUser } from '../../../application/use-cases/auth/RegisterUser.js';
import { LoginUser } from '../../../application/use-cases/auth/LoginUser.js';
import { RefreshToken } from '../../../application/use-cases/auth/RefreshToken.js';
import { UserRepository } from '../../../infrastructure/database/repositories/UserRepository.js';
import { SessionRepository } from '../../../infrastructure/database/repositories/SessionRepository.js';
import { EncryptionService } from '../../../application/services/EncryptionService.js';
import { TokenService } from '../../../application/services/TokenService.js';
import { EmailService } from '../../../application/services/EmailService.js';
import { registerSchema, loginSchema, refreshTokenSchema } from '../validators/auth.js';
import { NotFoundError } from '../../../shared/errors/index.js';

export class AuthController {
  private userRepository = new UserRepository();
  private sessionRepository = new SessionRepository();
  private encryptionService = new EncryptionService();
  private tokenService = new TokenService();
  private emailService = new EmailService();

  register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = registerSchema.parse(req.body);

      const registerUser = new RegisterUser(
        this.userRepository,
        this.encryptionService,
        this.tokenService,
        this.emailService
      );

      const result = await registerUser.execute(data);

      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = loginSchema.parse(req.body);

      const loginUser = new LoginUser(
        this.userRepository,
        this.sessionRepository,
        this.encryptionService,
        this.tokenService
      );

      const result = await loginUser.execute({
        ...data,
        userAgent: req.headers['user-agent'] ?? 'unknown',
        ipAddress: req.ip ?? 'unknown',
      });

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { refreshToken } = refreshTokenSchema.parse(req.body);

      const refreshTokenUseCase = new RefreshToken(
        this.userRepository,
        this.sessionRepository,
        this.tokenService
      );

      const tokens = await refreshTokenUseCase.execute({
        refreshToken,
        userAgent: req.headers['user-agent'] ?? 'unknown',
        ipAddress: req.ip ?? 'unknown',
      });

      res.json({
        success: true,
        data: { tokens },
      });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { refreshToken } = refreshTokenSchema.parse(req.body);
      await this.sessionRepository.deleteByRefreshToken(refreshToken);

      res.json({
        success: true,
        message: 'Logged out successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  me = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.user) {
        throw new NotFoundError('User not found');
      }

      const user = await this.userRepository.findById(req.user.userId);
      if (!user) {
        throw new NotFoundError('User not found');
      }

      res.json({
        success: true,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
          phone: user.phone,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}
