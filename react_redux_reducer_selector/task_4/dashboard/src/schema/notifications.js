import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export { normalizedData };

export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const notificationsByUser = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      notificationsByUser.push(messages[notifications[id].context]);
    }
  }

  return notificationsByUser;
}

export function notificationsNormalizer(data) {
  const normalized = normalize(data, [notification]);

  return normalized.entities;
}

export default notificationsNormalizer;
