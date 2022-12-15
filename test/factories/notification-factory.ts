import { NotificationProps } from './../../src/app/entities/notification/notification';
import { Content } from '@app/entities/notification/content';
import { Notification } from '@app/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}
