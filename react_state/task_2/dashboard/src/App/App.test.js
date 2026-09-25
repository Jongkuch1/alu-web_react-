import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component wrapped with WithLogging', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('WithLogging(Login)').length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not display CourseList when the user is not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when the user is logged in', () => {
    it('does not include the Login component', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        value: { user: { email: 'a@a.com', password: 'x', isLoggedIn: true }, logOut: () => {} },
      });
      expect(wrapper.find('WithLogging(Login)').length).toBe(0);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        value: { user: { email: 'a@a.com', password: 'x', isLoggedIn: true }, logOut: () => {} },
      });
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('displayDrawer state', () => {
    it('has a default state for displayDrawer set to false', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('sets displayDrawer to true when handleDisplayDrawer is called', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('sets displayDrawer to false when handleHideDrawer is called', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state('displayDrawer')).toBe(true);
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state('displayDrawer')).toBe(false);
    });
  });

  describe('logIn', () => {
    it('updates the state with the logged in user', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().logIn('a@a.com', 'password');
      expect(wrapper.state('value').user).toEqual({
        email: 'a@a.com',
        password: 'password',
        isLoggedIn: true,
      });
    });
  });

  describe('logOut', () => {
    it('resets the user object in the state', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().logIn('a@a.com', 'password');
      expect(wrapper.state('value').user.isLoggedIn).toBe(true);
      wrapper.instance().logOut();
      expect(wrapper.state('value').user.isLoggedIn).toBe(false);
    });
  });

  describe('keydown handling', () => {
    let alertSpy;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertSpy.mockRestore();
    });

    it('calls logOut and displays an alert when ctrl+h is pressed', () => {
      const wrapper = mount(<App />);
      const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');

      const event = new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      });
      document.dispatchEvent(event);

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
      expect(logOutSpy).toHaveBeenCalled();

      wrapper.unmount();
    });
  });
});
