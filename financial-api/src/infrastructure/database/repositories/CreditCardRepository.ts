import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../prisma/client.js';
import { CreditCard, CreditCardProps } from '../../../domain/entities/index.js';
import { ICreditCardRepository } from '../../../domain/repositories/index.js';

export class CreditCardRepository implements ICreditCardRepository {
  async findById(id: string): Promise<CreditCard | null> {
    const card = await prisma.creditCard.findUnique({ where: { id } });
    if (!card) return null;
    return CreditCard.create(this.mapToCreditCardProps(card));
  }

  async findByUserId(userId: string): Promise<CreditCard[]> {
    const cards = await prisma.creditCard.findMany({
      where: { userId, isActive: true },
      orderBy: { name: 'asc' },
    });
    return cards.map((c) => CreditCard.create(this.mapToCreditCardProps(c)));
  }

  async create(data: Omit<CreditCardProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<CreditCard> {
    const card = await prisma.creditCard.create({
      data: {
        userId: data.userId,
        name: data.name,
        last4Digits: data.last4Digits,
        limit: data.limit,
        closingDay: data.closingDay,
        dueDay: data.dueDay,
        color: data.color,
        icon: data.icon,
        isActive: data.isActive,
      },
    });
    return CreditCard.create(this.mapToCreditCardProps(card));
  }

  async update(id: string, data: Partial<CreditCardProps>): Promise<CreditCard> {
    const card = await prisma.creditCard.update({
      where: { id },
      data: {
        name: data.name,
        limit: data.limit,
        closingDay: data.closingDay,
        dueDay: data.dueDay,
        color: data.color,
        icon: data.icon,
        isActive: data.isActive,
      },
    });
    return CreditCard.create(this.mapToCreditCardProps(card));
  }

  async delete(id: string): Promise<void> {
    await prisma.creditCard.update({
      where: { id },
      data: { isActive: false },
    });
  }

  private mapToCreditCardProps(card: {
    id: string;
    userId: string;
    name: string;
    last4Digits: string;
    limit: Decimal;
    closingDay: number;
    dueDay: number;
    color: string | null;
    icon: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): CreditCardProps {
    return {
      id: card.id,
      userId: card.userId,
      name: card.name,
      last4Digits: card.last4Digits,
      limit: card.limit,
      closingDay: card.closingDay,
      dueDay: card.dueDay,
      color: card.color,
      icon: card.icon,
      isActive: card.isActive,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
    };
  }
}
