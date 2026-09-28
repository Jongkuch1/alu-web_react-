import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';
import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('notification action creators', () => {
  it('markAsAread returns the right action', () => {
    expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('setNotificationFilter returns the right action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    });
  });
});
