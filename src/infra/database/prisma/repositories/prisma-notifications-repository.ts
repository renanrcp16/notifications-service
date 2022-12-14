import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/app/entities/notification/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
