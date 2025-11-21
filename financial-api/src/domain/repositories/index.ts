import { User } from '../entities/User.js';
import { Account } from '../entities/Account.js';
import { Transaction } from '../entities/index.js';
import { Category, Budget, Goal, CreditCard } from '../entities/index.js';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByCpf(cpf: string): Promise<User | null>;
  create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
  update(id: string, data: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
  list(params: PaginationParams): Promise<PaginatedResult<User>>;
}

export interface IAccountRepository {
  findById(id: string): Promise<Account | null>;
  findByUserId(userId: string): Promise<Account[]>;
  create(account: Omit<Account, 'id' | 'createdAt' | 'updatedAt'>): Promise<Account>;
  update(id: string, data: Partial<Account>): Promise<Account>;
  delete(id: string): Promise<void>;
  updateBalance(id: string, balance: number): Promise<void>;
}

export interface ITransactionRepository {
  findById(id: string): Promise<Transaction | null>;
  findByUserId(
    userId: string,
    filters?: TransactionFilters,
    pagination?: PaginationParams
  ): Promise<PaginatedResult<Transaction>>;
  create(transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Promise<Transaction>;
  update(id: string, data: Partial<Transaction>): Promise<Transaction>;
  softDelete(id: string, userId: string): Promise<void>;
  findByAccountId(accountId: string, dateRange?: { start: Date; end: Date }): Promise<Transaction[]>;
  findByCategory(
    categoryId: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<Transaction[]>;
  getMonthlySum(
    userId: string,
    type: string,
    month: number,
    year: number
  ): Promise<number>;
}

export interface TransactionFilters {
  type?: string;
  status?: string;
  accountId?: string;
  categoryId?: string;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  search?: string;
}

export interface ICategoryRepository {
  findById(id: string): Promise<Category | null>;
  findByUserId(userId: string): Promise<Category[]>;
  findByUserIdAndType(userId: string, type: string): Promise<Category[]>;
  create(category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category>;
  update(id: string, data: Partial<Category>): Promise<Category>;
  delete(id: string): Promise<void>;
  getTree(userId: string): Promise<Category[]>;
}

export interface IBudgetRepository {
  findById(id: string): Promise<Budget | null>;
  findByUserId(userId: string): Promise<Budget[]>;
  findByUserIdAndMonth(userId: string, month: number, year: number): Promise<Budget[]>;
  findByUserIdCategoryAndMonth(
    userId: string,
    categoryId: string,
    month: number,
    year: number
  ): Promise<Budget | null>;
  create(budget: Omit<Budget, 'id' | 'createdAt' | 'updatedAt'>): Promise<Budget>;
  update(id: string, data: Partial<Budget>): Promise<Budget>;
  delete(id: string): Promise<void>;
  updateSpent(id: string, spent: number): Promise<void>;
}

export interface IGoalRepository {
  findById(id: string): Promise<Goal | null>;
  findByUserId(userId: string): Promise<Goal[]>;
  create(goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>): Promise<Goal>;
  update(id: string, data: Partial<Goal>): Promise<Goal>;
  delete(id: string): Promise<void>;
}

export interface ICreditCardRepository {
  findById(id: string): Promise<CreditCard | null>;
  findByUserId(userId: string): Promise<CreditCard[]>;
  create(card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>): Promise<CreditCard>;
  update(id: string, data: Partial<CreditCard>): Promise<CreditCard>;
  delete(id: string): Promise<void>;
}

export interface ISessionRepository {
  create(session: {
    userId: string;
    refreshToken: string;
    userAgent: string;
    ipAddress: string;
    expiresAt: Date;
  }): Promise<void>;
  findByRefreshToken(refreshToken: string): Promise<{
    id: string;
    userId: string;
    expiresAt: Date;
  } | null>;
  deleteByRefreshToken(refreshToken: string): Promise<void>;
  deleteAllByUserId(userId: string): Promise<void>;
}

export interface IAuditLogRepository {
  create(log: {
    userId: string;
    action: string;
    entity: string;
    entityId: string;
    ipAddress: string;
    userAgent: string;
    before?: Record<string, unknown>;
    after?: Record<string, unknown>;
  }): Promise<void>;
  findByUserId(
    userId: string,
    pagination: PaginationParams
  ): Promise<PaginatedResult<{
    id: string;
    action: string;
    entity: string;
    entityId: string;
    createdAt: Date;
  }>>;
}
