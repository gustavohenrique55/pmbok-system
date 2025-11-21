import { prisma } from '../prisma/client.js';
import { User, UserProps } from '../../../domain/entities/User.js';
import { IUserRepository, PaginationParams, PaginatedResult } from '../../../domain/repositories/index.js';
import { Role } from '../../../domain/enums/index.js';

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    return User.create(this.mapToUserProps(user));
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) return null;
    return User.create(this.mapToUserProps(user));
  }

  async findByCpf(cpf: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { cpf } });
    if (!user) return null;
    return User.create(this.mapToUserProps(user));
  }

  async create(userData: Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email: userData.email.toLowerCase(),
        password: userData.password,
        name: userData.name,
        avatar: userData.avatar,
        cpf: userData.cpf,
        phone: userData.phone,
        role: userData.role,
        isActive: userData.isActive,
        failedLogins: userData.failedLogins,
        lockedUntil: userData.lockedUntil,
        lastLoginAt: userData.lastLoginAt,
        lastLoginIp: userData.lastLoginIp,
      },
    });
    return User.create(this.mapToUserProps(user));
  }

  async update(id: string, data: Partial<UserProps>): Promise<User> {
    const user = await prisma.user.update({
      where: { id },
      data: {
        email: data.email?.toLowerCase(),
        password: data.password,
        name: data.name,
        avatar: data.avatar,
        cpf: data.cpf,
        phone: data.phone,
        role: data.role,
        isActive: data.isActive,
        failedLogins: data.failedLogins,
        lockedUntil: data.lockedUntil,
        lastLoginAt: data.lastLoginAt,
        lastLoginIp: data.lastLoginIp,
      },
    });
    return User.create(this.mapToUserProps(user));
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }

  async list(params: PaginationParams): Promise<PaginatedResult<User>> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count(),
    ]);

    return {
      data: users.map((user) => User.create(this.mapToUserProps(user))),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  private mapToUserProps(user: {
    id: string;
    email: string;
    password: string;
    name: string;
    avatar: string | null;
    cpf: string | null;
    phone: string | null;
    role: string;
    isActive: boolean;
    failedLogins: number;
    lockedUntil: Date | null;
    lastLoginAt: Date | null;
    lastLoginIp: string | null;
    createdAt: Date;
    updatedAt: Date;
  }): UserProps {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      avatar: user.avatar,
      cpf: user.cpf,
      phone: user.phone,
      role: user.role as Role,
      isActive: user.isActive,
      failedLogins: user.failedLogins,
      lockedUntil: user.lockedUntil,
      lastLoginAt: user.lastLoginAt,
      lastLoginIp: user.lastLoginIp,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
