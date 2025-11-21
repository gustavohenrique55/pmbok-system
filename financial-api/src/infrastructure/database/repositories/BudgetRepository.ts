import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../prisma/client.js';
import { Budget, BudgetProps } from '../../../domain/entities/index.js';
import { IBudgetRepository } from '../../../domain/repositories/index.js';

export class BudgetRepository implements IBudgetRepository {
  async findById(id: string): Promise<Budget | null> {
    const budget = await prisma.budget.findUnique({ where: { id } });
    if (!budget) return null;
    return Budget.create(this.mapToBudgetProps(budget));
  }

  async findByUserId(userId: string): Promise<Budget[]> {
    const budgets = await prisma.budget.findMany({
      where: { userId },
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    });
    return budgets.map((b) => Budget.create(this.mapToBudgetProps(b)));
  }

  async findByUserIdAndMonth(userId: string, month: number, year: number): Promise<Budget[]> {
    const budgets = await prisma.budget.findMany({
      where: { userId, month, year },
      include: { category: true },
    });
    return budgets.map((b) => Budget.create(this.mapToBudgetProps(b)));
  }

  async findByUserIdCategoryAndMonth(
    userId: string,
    categoryId: string,
    month: number,
    year: number
  ): Promise<Budget | null> {
    const budget = await prisma.budget.findUnique({
      where: {
        userId_categoryId_month_year: { userId, categoryId, month, year },
      },
    });
    if (!budget) return null;
    return Budget.create(this.mapToBudgetProps(budget));
  }

  async create(data: Omit<BudgetProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<Budget> {
    const budget = await prisma.budget.create({
      data: {
        userId: data.userId,
        categoryId: data.categoryId,
        name: data.name,
        amount: data.amount,
        spent: data.spent,
        month: data.month,
        year: data.year,
        alertAt50: data.alertAt50,
        alertAt80: data.alertAt80,
        alertAt100: data.alertAt100,
      },
    });
    return Budget.create(this.mapToBudgetProps(budget));
  }

  async update(id: string, data: Partial<BudgetProps>): Promise<Budget> {
    const budget = await prisma.budget.update({
      where: { id },
      data: {
        name: data.name,
        amount: data.amount,
        alertAt50: data.alertAt50,
        alertAt80: data.alertAt80,
        alertAt100: data.alertAt100,
      },
    });
    return Budget.create(this.mapToBudgetProps(budget));
  }

  async delete(id: string): Promise<void> {
    await prisma.budget.delete({ where: { id } });
  }

  async updateSpent(id: string, spent: number): Promise<void> {
    await prisma.budget.update({
      where: { id },
      data: { spent: new Decimal(spent) },
    });
  }

  private mapToBudgetProps(budget: {
    id: string;
    userId: string;
    categoryId: string;
    name: string;
    amount: Decimal;
    spent: Decimal;
    month: number;
    year: number;
    alertAt50: boolean;
    alertAt80: boolean;
    alertAt100: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): BudgetProps {
    return {
      id: budget.id,
      userId: budget.userId,
      categoryId: budget.categoryId,
      name: budget.name,
      amount: budget.amount,
      spent: budget.spent,
      month: budget.month,
      year: budget.year,
      alertAt50: budget.alertAt50,
      alertAt80: budget.alertAt80,
      alertAt100: budget.alertAt100,
      createdAt: budget.createdAt,
      updatedAt: budget.updatedAt,
    };
  }
}
