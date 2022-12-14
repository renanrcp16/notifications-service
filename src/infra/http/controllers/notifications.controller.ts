import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@app/useCases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';
import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }
}
