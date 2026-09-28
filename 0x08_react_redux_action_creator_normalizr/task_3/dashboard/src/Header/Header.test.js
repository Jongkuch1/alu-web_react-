import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext, { user as defaultUser } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('renders without crashing', () => {
    mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('renders an img and an h1', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('does not display logoutSection with the default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
    wrapper.unmount();
  });

  it('displays logoutSection when the user is logged in', () => {
    const user = {
      email: 'test@test.com',
      password: 'pwd',
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
    wrapper.unmount();
  });

  it('calls logOut when the logout link is clicked', () => {
    const user = {
      email: 'test@test.com',
      password: 'pwd',
      isLoggedIn: true,
    };
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
    wrapper.unmount();
  });
});
