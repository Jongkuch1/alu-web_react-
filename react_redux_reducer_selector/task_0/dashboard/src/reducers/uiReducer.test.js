import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });

    expect(state).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
