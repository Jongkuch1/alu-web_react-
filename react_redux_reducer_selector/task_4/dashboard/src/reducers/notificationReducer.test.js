import { Map, fromJS } from 'immutable';
import notificationReducer, {
  initialNotificationState,
} from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

describe('notificationReducer', () => {
  it('returns the initial state by default', () => {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(Map(initialNotificationState));
  });

  it('returns the data passed for FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];

    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };

    const normalizedData = notificationsNormalizer(data);
    const expectedData = { filter: 'DEFAULT', ...normalizedData };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = false;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(undefined, action);

    expect(state.toJS()).toEqual(expectedData);
  });

  it('returns the data with the right item updated for MARK_AS_READ', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];

    const initialState = {
      filter: 'DEFAULT',
      notifications: notificationsNormalizer(data).notifications,
    };
    Object.values(initialState.notifications).forEach((n) => {
      n.isRead = false;
    });

    const action = { type: MARK_AS_READ, index: 2 };

    const normalizedData = notificationsNormalizer(data);
    const expectedData = { filter: 'DEFAULT', ...normalizedData };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = true;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });

  it('returns the data with the filter updated for SET_TYPE_FILTER', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    ];

    const initialState = {
      filter: 'DEFAULT',
      notifications: notificationsNormalizer(data).notifications,
    };

    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };

    const normalizedData = notificationsNormalizer(data);
    const expectedData = { filter: 'URGENT', ...normalizedData };

    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });
});
