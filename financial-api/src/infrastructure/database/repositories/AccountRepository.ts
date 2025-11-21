import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../prisma/client.js';
import { Account, AccountProps } from '../../../domain/entities/Account.js';
import { IAccountRepository } from '../../../domain/repositories/index.js';
import { AccountType } from '../../../domain/enums/index.js';

export class AccountRepository implements IAccountRepository {
  async findById(id: string): Promise<Account | null> {
    const account = await prisma.account.findUnique({ where: { id } });
    if (!account) return null;
    return Account.create(this.mapToAccountProps(account));
  }

  async findByUserId(userId: string): Promise<Account[]> {
    const accounts = await prisma.account.findMany({
      where: { userId, isActive: true },
      orderBy: { name: 'asc' },
    });
    return accounts.map((a) => Account.create(this.mapToAccountProps(a)));
  }

  async create(data: Omit<AccountProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<Account> {
    const account = await prisma.account.create({
      data: {
        userId: data.userId,
        name: data.name,
        type: data.type,
        bank: data.bank,
        agency: data.agency,
        accountNumber: data.accountNumber,
        initialBalance: data.initialBalance,
        currentBalance: data.currentBalance,
        color: data.color,
        icon: data.icon,
        currency: data.currency,
        isActive: data.isActive,
      },
    });
    return Account.create(this.mapToAccountProps(account));
  }

  async update(id: string, data: Partial<AccountProps>): Promise<Account> {
    const account = await prisma.account.update({
      where: { id },
      data: {
        name: data.name,
        type: data.type,
        bank: data.bank,
        agency: data.agency,
        accountNumber: data.accountNumber,
        color: data.color,
        icon: data.icon,
        currency: data.currency,
        isActive: data.isActive,
      },
    });
    return Account.create(this.mapToAccountProps(account));
  }

  async delete(id: string): Promise<void> {
    await prisma.account.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async updateBalance(id: string, balance: number): Promise<void> {
    await prisma.account.update({
      where: { id },
      data: { currentBalance: new Decimal(balance) },
    });
  }

  private mapToAccountProps(account: {
    id: string;
    userId: string;
    name: string;
    type: string;
    bank: string | null;
    agency: string | null;
    accountNumber: string | null;
    initialBalance: Decimal;
    currentBalance: Decimal;
    color: string | null;
    icon: string | null;
    currency: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): AccountProps {
    return {
      id: account.id,
      userId: account.userId,
      name: account.name,
      type: account.type as AccountType,
      bank: account.bank,
      agency: account.agency,
      accountNumber: account.accountNumber,
      initialBalance: account.initialBalance,
      currentBalance: account.currentBalance,
      color: account.color,
      icon: account.icon,
      currency: account.currency,
      isActive: account.isActive,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    };
  }
}
