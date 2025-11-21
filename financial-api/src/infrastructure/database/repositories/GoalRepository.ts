import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../prisma/client.js';
import { Goal, GoalProps } from '../../../domain/entities/index.js';
import { IGoalRepository } from '../../../domain/repositories/index.js';

export class GoalRepository implements IGoalRepository {
  async findById(id: string): Promise<Goal | null> {
    const goal = await prisma.goal.findUnique({ where: { id } });
    if (!goal) return null;
    return Goal.create(this.mapToGoalProps(goal));
  }

  async findByUserId(userId: string): Promise<Goal[]> {
    const goals = await prisma.goal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return goals.map((g) => Goal.create(this.mapToGoalProps(g)));
  }

  async create(data: Omit<GoalProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<Goal> {
    const goal = await prisma.goal.create({
      data: {
        userId: data.userId,
        name: data.name,
        description: data.description,
        targetAmount: data.targetAmount,
        currentAmount: data.currentAmount,
        deadline: data.deadline,
        isCompleted: data.isCompleted,
        completedAt: data.completedAt,
        color: data.color,
        icon: data.icon,
      },
    });
    return Goal.create(this.mapToGoalProps(goal));
  }

  async update(id: string, data: Partial<GoalProps>): Promise<Goal> {
    const goal = await prisma.goal.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        targetAmount: data.targetAmount,
        currentAmount: data.currentAmount,
        deadline: data.deadline,
        isCompleted: data.isCompleted,
        completedAt: data.completedAt,
        color: data.color,
        icon: data.icon,
      },
    });
    return Goal.create(this.mapToGoalProps(goal));
  }

  async delete(id: string): Promise<void> {
    await prisma.goal.delete({ where: { id } });
  }

  private mapToGoalProps(goal: {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    targetAmount: Decimal;
    currentAmount: Decimal;
    deadline: Date | null;
    isCompleted: boolean;
    completedAt: Date | null;
    color: string | null;
    icon: string | null;
    createdAt: Date;
    updatedAt: Date;
  }): GoalProps {
    return {
      id: goal.id,
      userId: goal.userId,
      name: goal.name,
      description: goal.description,
      targetAmount: goal.targetAmount,
      currentAmount: goal.currentAmount,
      deadline: goal.deadline,
      isCompleted: goal.isCompleted,
      completedAt: goal.completedAt,
      color: goal.color,
      icon: goal.icon,
      createdAt: goal.createdAt,
      updatedAt: goal.updatedAt,
    };
  }
}
