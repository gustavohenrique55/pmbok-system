import { Request, Response, NextFunction } from 'express';
import { Decimal } from '@prisma/client/runtime/library';
import { AccountRepository } from '../../../infrastructure/database/repositories/AccountRepository.js';
import { createAccountSchema } from '../validators/index.js';
import { NotFoundError, ForbiddenError } from '../../../shared/errors/index.js';
import { AccountType } from '../../../domain/enums/index.js';

export class AccountController {
  private accountRepository = new AccountRepository();

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = createAccountSchema.parse(req.body);
      const userId = req.user!.userId;

      const account = await this.accountRepository.create({
        userId,
        name: data.name,
        type: data.type as AccountType,
        bank: data.bank ?? null,
        agency: data.agency ?? null,
        accountNumber: data.accountNumber ?? null,
        initialBalance: new Decimal(data.initialBalance),
        currentBalance: new Decimal(data.initialBalance),
        color: data.color ?? null,
        icon: data.icon ?? null,
        currency: data.currency,
        isActive: true,
      });

      res.status(201).json({
        success: true,
        data: account.toJSON(),
      });
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.userId;
      const accounts = await this.accountRepository.findByUserId(userId);

      res.json({
        success: true,
        data: accounts.map((a) => a.toJSON()),
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.userId;

      const account = await this.accountRepository.findById(id);

      if (!account) {
        throw new NotFoundError('Account not found');
      }

      if (account.userId !== userId) {
        throw new ForbiddenError('Access denied');
      }

      res.json({
        success: true,
        data: account.toJSON(),
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.userId;
      const data = createAccountSchema.partial().parse(req.body);

      const account = await this.accountRepository.findById(id);

      if (!account) {
        throw new NotFoundError('Account not found');
      }

      if (account.userId !== userId) {
        throw new ForbiddenError('Access denied');
      }

      const updated = await this.accountRepository.update(id, {
        name: data.name,
        type: data.type as AccountType,
        bank: data.bank,
        agency: data.agency,
        accountNumber: data.accountNumber,
        color: data.color,
        icon: data.icon,
        currency: data.currency,
      });

      res.json({
        success: true,
        data: updated.toJSON(),
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.userId;

      const account = await this.accountRepository.findById(id);

      if (!account) {
        throw new NotFoundError('Account not found');
      }

      if (account.userId !== userId) {
        throw new ForbiddenError('Access denied');
      }

      await this.accountRepository.delete(id);

      res.json({
        success: true,
        message: 'Account deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  getBalance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.userId;

      const account = await this.accountRepository.findById(id);

      if (!account) {
        throw new NotFoundError('Account not found');
      }

      if (account.userId !== userId) {
        throw new ForbiddenError('Access denied');
      }

      res.json({
        success: true,
        data: {
          accountId: account.id,
          name: account.name,
          currentBalance: account.currentBalance.toNumber(),
          currency: account.currency,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}
