import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../prisma/client.js';
import { Transaction, TransactionProps } from '../../../domain/entities/Transaction.js';
import {
  ITransactionRepository,
  TransactionFilters,
  PaginationParams,
  PaginatedResult,
} from '../../../domain/repositories/index.js';
import { TransactionType, TransactionStatus } from '../../../domain/enums/index.js';

export class TransactionRepository implements ITransactionRepository {
  async findById(id: string): Promise<Transaction | null> {
    const transaction = await prisma.transaction.findUnique({
      where: { id, deletedAt: null },
    });
    if (!transaction) return null;
    return Transaction.create(this.mapToTransactionProps(transaction));
  }

  async findByUserId(
    userId: string,
    filters?: TransactionFilters,
    pagination?: PaginationParams
  ): Promise<PaginatedResult<Transaction>> {
    const where: Record<string, unknown> = { userId, deletedAt: null };

    if (filters?.type) where['type'] = filters.type;
    if (filters?.status) where['status'] = filters.status;
    if (filters?.accountId) where['accountId'] = filters.accountId;
    if (filters?.categoryId) where['categoryId'] = filters.categoryId;
    if (filters?.startDate || filters?.endDate) {
      where['date'] = {
        ...(filters?.startDate && { gte: filters.startDate }),
        ...(filters?.endDate && { lte: filters.endDate }),
      };
    }
    if (filters?.minAmount || filters?.maxAmount) {
      where['amount'] = {
        ...(filters?.minAmount && { gte: filters.minAmount }),
        ...(filters?.maxAmount && { lte: filters.maxAmount }),
      };
    }
    if (filters?.search) {
      where['description'] = { contains: filters.search, mode: 'insensitive' };
    }

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        skip,
        take: limit,
        orderBy: { date: 'desc' },
      }),
      prisma.transaction.count({ where }),
    ]);

    return {
      data: transactions.map((t) => Transaction.create(this.mapToTransactionProps(t))),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async create(data: Omit<TransactionProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data: {
        userId: data.userId,
        accountId: data.accountId,
        categoryId: data.categoryId,
        type: data.type,
        amount: data.amount,
        description: data.description,
        date: data.date,
        status: data.status,
        installmentNumber: data.installmentNumber,
        totalInstallments: data.totalInstallments,
        parentTransactionId: data.parentTransactionId,
        isRecurring: data.isRecurring,
        recurringId: data.recurringId,
        creditCardId: data.creditCardId,
        invoiceId: data.invoiceId,
        tags: data.tags,
        notes: data.notes,
        attachments: data.attachments,
        location: data.location,
        createdBy: data.createdBy,
      },
    });
    return Transaction.create(this.mapToTransactionProps(transaction));
  }

  async update(id: string, data: Partial<TransactionProps>): Promise<Transaction> {
    const transaction = await prisma.transaction.update({
      where: { id },
      data: {
        categoryId: data.categoryId,
        amount: data.amount,
        description: data.description,
        date: data.date,
        status: data.status,
        tags: data.tags,
        notes: data.notes,
        location: data.location,
        updatedBy: data.updatedBy,
      },
    });
    return Transaction.create(this.mapToTransactionProps(transaction));
  }

  async softDelete(id: string, userId: string): Promise<void> {
    await prisma.transaction.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: userId },
    });
  }

  async findByAccountId(
    accountId: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany({
      where: {
        accountId,
        deletedAt: null,
        ...(dateRange && {
          date: { gte: dateRange.start, lte: dateRange.end },
        }),
      },
      orderBy: { date: 'desc' },
    });
    return transactions.map((t) => Transaction.create(this.mapToTransactionProps(t)));
  }

  async findByCategory(
    categoryId: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany({
      where: {
        categoryId,
        deletedAt: null,
        ...(dateRange && {
          date: { gte: dateRange.start, lte: dateRange.end },
        }),
      },
      orderBy: { date: 'desc' },
    });
    return transactions.map((t) => Transaction.create(this.mapToTransactionProps(t)));
  }

  async getMonthlySum(
    userId: string,
    type: string,
    month: number,
    year: number
  ): Promise<number> {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);

    const result = await prisma.transaction.aggregate({
      where: {
        userId,
        type,
        status: 'PAID',
        deletedAt: null,
        date: { gte: startDate, lte: endDate },
      },
      _sum: { amount: true },
    });

    return result._sum.amount?.toNumber() ?? 0;
  }

  private mapToTransactionProps(transaction: {
    id: string;
    userId: string;
    accountId: string;
    categoryId: string;
    type: string;
    amount: Decimal;
    description: string;
    date: Date;
    status: string;
    installmentNumber: number | null;
    totalInstallments: number | null;
    parentTransactionId: string | null;
    isRecurring: boolean;
    recurringId: string | null;
    creditCardId: string | null;
    invoiceId: string | null;
    tags: string[];
    notes: string | null;
    attachments: string[];
    location: string | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
  }): TransactionProps {
    return {
      id: transaction.id,
      userId: transaction.userId,
      accountId: transaction.accountId,
      categoryId: transaction.categoryId,
      type: transaction.type as TransactionType,
      amount: transaction.amount,
      description: transaction.description,
      date: transaction.date,
      status: transaction.status as TransactionStatus,
      installmentNumber: transaction.installmentNumber,
      totalInstallments: transaction.totalInstallments,
      parentTransactionId: transaction.parentTransactionId,
      isRecurring: transaction.isRecurring,
      recurringId: transaction.recurringId,
      creditCardId: transaction.creditCardId,
      invoiceId: transaction.invoiceId,
      tags: transaction.tags,
      notes: transaction.notes,
      attachments: transaction.attachments,
      location: transaction.location,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
      createdBy: transaction.createdBy,
      updatedBy: transaction.updatedBy,
      deletedAt: transaction.deletedAt,
      deletedBy: transaction.deletedBy,
    };
  }
}
