import { prisma } from '../prisma/client.js';
import { ISessionRepository } from '../../../domain/repositories/index.js';

export class SessionRepository implements ISessionRepository {
  async create(session: {
    userId: string;
    refreshToken: string;
    userAgent: string;
    ipAddress: string;
    expiresAt: Date;
  }): Promise<void> {
    await prisma.session.create({
      data: session,
    });
  }

  async findByRefreshToken(refreshToken: string): Promise<{
    id: string;
    userId: string;
    expiresAt: Date;
  } | null> {
    return prisma.session.findUnique({
      where: { refreshToken },
      select: { id: true, userId: true, expiresAt: true },
    });
  }

  async deleteByRefreshToken(refreshToken: string): Promise<void> {
    await prisma.session.delete({ where: { refreshToken } });
  }

  async deleteAllByUserId(userId: string): Promise<void> {
    await prisma.session.deleteMany({ where: { userId } });
  }
}
