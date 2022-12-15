import { UnreadNotification } from './../../app/useCases/unread-notification';
import { ReadNotification } from './../../app/useCases/read-notification';
import { GetRecipientNotifications } from './../../app/useCases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../app/useCases/count-recipient-notifications';
import { CancelNotification } from './../../app/useCases/cancel-notification';
import { DatabaseModule } from './../database/database.module';
import { SendNotification } from '@app/useCases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
