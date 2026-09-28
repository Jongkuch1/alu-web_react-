import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import store from '../store';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const boundMarkAsAread = bindActionCreators(markAsAread, store.dispatch);
export const boundSetNotificationFilter = bindActionCreators(
  setNotificationFilter,
  store.dispatch
);
