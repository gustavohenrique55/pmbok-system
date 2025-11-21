import { prisma } from '../prisma/client.js';
import { Category, CategoryProps } from '../../../domain/entities/index.js';
import { ICategoryRepository } from '../../../domain/repositories/index.js';
import { TransactionType } from '../../../domain/enums/index.js';

export class CategoryRepository implements ICategoryRepository {
  async findById(id: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) return null;
    return Category.create(this.mapToCategoryProps(category));
  }

  async findByUserId(userId: string): Promise<Category[]> {
    const categories = await prisma.category.findMany({
      where: { userId },
      orderBy: { name: 'asc' },
    });
    return categories.map((c) => Category.create(this.mapToCategoryProps(c)));
  }

  async findByUserIdAndType(userId: string, type: string): Promise<Category[]> {
    const categories = await prisma.category.findMany({
      where: { userId, type: type as TransactionType },
      orderBy: { name: 'asc' },
    });
    return categories.map((c) => Category.create(this.mapToCategoryProps(c)));
  }

  async create(data: Omit<CategoryProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        userId: data.userId,
        name: data.name,
        type: data.type,
        color: data.color,
        icon: data.icon,
        parentId: data.parentId,
      },
    });
    return Category.create(this.mapToCategoryProps(category));
  }

  async update(id: string, data: Partial<CategoryProps>): Promise<Category> {
    const category = await prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        color: data.color,
        icon: data.icon,
        parentId: data.parentId,
      },
    });
    return Category.create(this.mapToCategoryProps(category));
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({ where: { id } });
  }

  async getTree(userId: string): Promise<Category[]> {
    const categories = await prisma.category.findMany({
      where: { userId, parentId: null },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });
    return categories.map((c) => Category.create(this.mapToCategoryProps(c)));
  }

  private mapToCategoryProps(category: {
    id: string;
    userId: string;
    name: string;
    type: string;
    color: string | null;
    icon: string | null;
    parentId: string | null;
    createdAt: Date;
    updatedAt: Date;
  }): CategoryProps {
    return {
      id: category.id,
      userId: category.userId,
      name: category.name,
      type: category.type as TransactionType,
      color: category.color,
      icon: category.icon,
      parentId: category.parentId,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
