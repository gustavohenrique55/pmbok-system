import { Request, Response, NextFunction } from 'express';
import { TokenService } from '../../../application/services/TokenService.js';
import { UnauthorizedError, ForbiddenError } from '../../../shared/errors/index.js';
import { Role, Permission, RolePermissions } from '../../../domain/enums/index.js';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
        role: string;
      };
    }
  }
}

const tokenService = new TokenService();

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('No token provided');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedError('No token provided');
    }

    const payload = tokenService.verifyToken(token);
    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
}

export function authorize(...permissions: Permission[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new UnauthorizedError('Authentication required');
      }

      const userRole = req.user.role as Role;
      const userPermissions = RolePermissions[userRole] ?? [];

      const hasPermission = permissions.every((permission) =>
        userPermissions.includes(permission)
      );

      if (!hasPermission) {
        throw new ForbiddenError('Insufficient permissions');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}

export function authorizeRoles(...roles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new UnauthorizedError('Authentication required');
      }

      if (!roles.includes(req.user.role as Role)) {
        throw new ForbiddenError('Insufficient role');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}
