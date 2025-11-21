import { prisma } from '../prisma/client.js';
import { IAuditLogRepository, PaginationParams, PaginatedResult } from '../../../domain/repositories/index.js';

export class AuditLogRepository implements IAuditLogRepository {
  async create(log: {
    userId: string;
    action: string;
    entity: string;
    entityId: string;
    ipAddress: string;
    userAgent: string;
    before?: Record<string, unknown>;
    after?: Record<string, unknown>;
  }): Promise<void> {
    await prisma.auditLog.create({
      data: {
        userId: log.userId,
        action: log.action,
        entity: log.entity,
        entityId: log.entityId,
        ipAddress: log.ipAddress,
        userAgent: log.userAgent,
        before: log.before,
        after: log.after,
      },
    });
  }

  async findByUserId(
    userId: string,
    pagination: PaginationParams
  ): Promise<PaginatedResult<{
    id: string;
    action: string;
    entity: string;
    entityId: string;
    createdAt: Date;
  }>> {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          action: true,
          entity: true,
          entityId: true,
          createdAt: true,
        },
      }),
      prisma.auditLog.count({ where: { userId } }),
    ]);

    return {
      data: logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
