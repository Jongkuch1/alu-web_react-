import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

export const initialNotificationState = {
  notifications: [],
  filter: 'DEFAULT',
};

export function notificationReducer(state = initialNotificationState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };

    case MARK_AS_READ: {
      const notificationsById = new Map(
        state.notifications.map((notification) => [notification.id, notification])
      );
      const notification = notificationsById.get(action.index);
      if (notification) {
        notificationsById.set(action.index, { ...notification, isRead: true });
      }
      return {
        ...state,
        notifications: Array.from(notificationsById.values()),
      };
    }

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}

export default notificationReducer;
