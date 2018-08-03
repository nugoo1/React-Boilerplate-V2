import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { LoginPage } from '../../components/LoginPage'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click', {
    preventDefault: () => { }
  });
  expect(startLogoutSpy).toHaveBeenCalled();
});

test('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find('button').simulate('click', {
    preventDefault: () => { }
  });
  expect(startLoginSpy).toHaveBeenCalled();
});
