import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import AppContext, { user as defaultUser } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders without crashing', () => {
    mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
  });

  it('renders the text "Copyright"', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the Contact us link when the user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the Contact us link when the user is logged in', () => {
    const user = { email: 'a@a.com', password: 'pwd', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});
