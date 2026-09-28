import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

StyleSheetTestUtils.suppressStyleInjection();

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  describe('when displayDrawer is false', () => {
    it('displays the menu item', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('does not display div.Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.Notifications').length).toBe(0);
    });
  });

  describe('when displayDrawer is true', () => {
    it('displays the menu item', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('displays div.Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.Notifications').length).toBe(1);
    });
  });

  describe('with an empty (or missing) listNotifications', () => {
    it('renders correctly with no listNotifications property', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find(NotificationItem).length).toBe(0);
    });

    it('renders correctly when passed an empty array', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={[]} />
      );
      expect(wrapper.find(NotificationItem).length).toBe(0);
    });

    it('does not display "Here is the list of notifications" but displays "No new notification for now"', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={[]} />
      );
      expect(wrapper.find('.Notifications').text()).not.toContain(
        'Here is the list of notifications'
      );
      expect(wrapper.find('.Notifications').text()).toContain(
        'No new notification for now'
      );
    });
  });

  describe('with a list of notifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
    });

    it('renders the correct number of NotificationItem', () => {
      expect(wrapper.find(NotificationItem).length).toBe(
        listNotifications.length
      );
    });

    it('renders "Here is the list of notifications"', () => {
      expect(wrapper.find('.Notifications').text()).toContain(
        'Here is the list of notifications'
      );
    });
  });

  describe('markNotificationAsRead', () => {
    it('passes markNotificationAsRead down to each NotificationItem as markAsRead', () => {
      const markNotificationAsRead = jest.fn();
      const wrapper = shallow(
        <Notifications
          displayDrawer
          listNotifications={listNotifications}
          markNotificationAsRead={markNotificationAsRead}
        />
      );
      wrapper.find(NotificationItem).first().prop('markAsRead')(1);
      expect(markNotificationAsRead).toHaveBeenCalledWith(1);
    });
  });

  describe('handleDisplayDrawer and handleHideDrawer', () => {
    it('calls handleDisplayDrawer when the menu item is clicked', () => {
      const handleDisplayDrawer = jest.fn();
      const wrapper = shallow(
        <Notifications handleDisplayDrawer={handleDisplayDrawer} />
      );
      wrapper.find('.menuItem').simulate('click');
      expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    it('calls handleHideDrawer when the close button is clicked', () => {
      const handleHideDrawer = jest.fn();
      const wrapper = shallow(
        <Notifications displayDrawer handleHideDrawer={handleHideDrawer} />
      );
      wrapper.find('button').simulate('click');
      expect(handleHideDrawer).toHaveBeenCalled();
    });
  });
});
