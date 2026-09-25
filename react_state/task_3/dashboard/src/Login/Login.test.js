import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 text/password input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="email"]').length).toBe(1);
    expect(wrapper.find('input[type="password"]').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('has a submit button that is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('enables the submit button after changing the value of both inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find('input[type="email"]')
      .simulate('change', { target: { value: 'test@test.com' } });
    wrapper
      .find('input[type="password"]')
      .simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});
