export * from './auth.js';

import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export const createAccountSchema = z.object({
  name: z.string().min(1).max(100),
  type: z.enum(['CHECKING', 'SAVINGS', 'INVESTMENT', 'WALLET', 'CREDIT_CARD']),
  bank: z.string().max(100).optional(),
  agency: z.string().max(20).optional(),
  accountNumber: z.string().max(30).optional(),
  initialBalance: z.number().default(0),
  color: z.string().max(7).optional(),
  icon: z.string().max(50).optional(),
  currency: z.string().length(3).default('BRL'),
});

export const createCategorySchema = z.object({
  name: z.string().min(1).max(100),
  type: z.enum(['INCOME', 'EXPENSE', 'TRANSFER']),
  color: z.string().max(7).optional(),
  icon: z.string().max(50).optional(),
  parentId: z.string().uuid().optional(),
});

export const createTransactionSchema = z.object({
  accountId: z.string().uuid(),
  categoryId: z.string().uuid(),
  type: z.enum(['INCOME', 'EXPENSE', 'TRANSFER']),
  amount: z.number().positive(),
  description: z.string().min(1).max(255),
  date: z.string().datetime(),
  status: z.enum(['PENDING', 'PAID', 'CANCELLED', 'OVERDUE']).default('PENDING'),
  tags: z.array(z.string()).default([]),
  notes: z.string().max(1000).optional(),
  location: z.string().max(255).optional(),
});

export const createBudgetSchema = z.object({
  categoryId: z.string().uuid(),
  name: z.string().min(1).max(100),
  amount: z.number().positive(),
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(2000).max(2100),
  alertAt50: z.boolean().default(true),
  alertAt80: z.boolean().default(true),
  alertAt100: z.boolean().default(true),
});

export const createGoalSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  targetAmount: z.number().positive(),
  deadline: z.string().datetime().optional(),
  color: z.string().max(7).optional(),
  icon: z.string().max(50).optional(),
});

export const createCreditCardSchema = z.object({
  name: z.string().min(1).max(100),
  last4Digits: z.string().length(4),
  limit: z.number().positive(),
  closingDay: z.number().int().min(1).max(31),
  dueDay: z.number().int().min(1).max(31),
  color: z.string().max(7).optional(),
  icon: z.string().max(50).optional(),
});

export const dateRangeSchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});
