export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return state.get('notifications');
}

export function getUnreadNotifications(state) {
  const notifications = state.get('notifications');

  return notifications.filter((notification) => !notification.get('isRead'));
}
