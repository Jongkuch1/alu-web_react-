import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import notificationReducer, {
  initialNotificationState,
} from '../reducers/notificationReducer';
import notificationsNormalizer from '../schema/notifications';

describe('notificationSelector', () => {
  it('filterTypeSelected returns the value of the filter', () => {
    const state = notificationReducer(undefined, {});

    expect(filterTypeSelected(state)).toEqual(initialNotificationState.filter);
  });

  it('getNotifications returns the list of notifications within the reducer', () => {
    const data = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];

    const initialState = {
      filter: 'DEFAULT',
      notifications: notificationsNormalizer(data).notifications,
    };

    const state = notificationReducer(fromJS(initialState), {});
    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(data).notifications
    );
  });

  it('getUnreadNotifications returns the list of unread notifications within the reducer', () => {
    const data = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
    ];

    const expectedResult = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    ];

    const initialState = {
      filter: 'DEFAULT',
      notifications: notificationsNormalizer(data).notifications,
    };

    const state = notificationReducer(fromJS(initialState), {});
    const selected = getUnreadNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(expectedResult).notifications
    );
  });
});
