import { CountRecipientNotifications } from './count-recipient-notifications';
import { Content } from '../entities/notification/content';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@app/entities/notification/notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipienteNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1 ' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1 ' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2 ' }),
    );

    const { count } = await countRecipienteNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
