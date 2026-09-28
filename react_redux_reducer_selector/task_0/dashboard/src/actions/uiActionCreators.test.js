import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

  describe('loginRequest', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches LOGIN then LOGIN_SUCCESS when the API succeeds', () => {
      const store = mockStore({});
      const email = 'test@test.com';
      const password = '123456';

      fetchMock.getOnce('http://localhost:8564/login-success.json', {
        body: {},
        status: 200,
      });

      return store.dispatch(loginRequest(email, password)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(email, password));
        expect(actions[1]).toEqual(loginSuccess());
      });
    });

    it('dispatches LOGIN then LOGIN_FAILURE when the API fails', () => {
      const store = mockStore({});
      const email = 'test@test.com';
      const password = '123456';

      fetchMock.get('http://localhost:8564/login-success.json', 500);

      return store.dispatch(loginRequest(email, password)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(email, password));
        expect(actions[1]).toEqual(loginFailure());
      });
    });
  });
});
