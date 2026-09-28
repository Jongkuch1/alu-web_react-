import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('ui action creators', () => {
  it('login returns the right action', () => {
    const user = { email: 'larry@gmail.com', password: '123456789' };
    expect(login(user.email, user.password)).toEqual({ type: LOGIN, user });
  });

  it('logout returns the right action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer returns the right action', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it('hideNotificationDrawer returns the right action', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
