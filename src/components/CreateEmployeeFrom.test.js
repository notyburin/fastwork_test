import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CreateEmployeeFrom } from './CreateEmployeeFrom';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<CreateEmployeeFrom dispatch={jest.fn()} />);

test('should render loading when isProcess', () => {
  wrapper.setProps({ isProcess: true });
  expect(wrapper.find('.process').exists()).toBe(true);
});

test('should not render loading when process done', () => {
  wrapper.setProps({ isProcess: false });
  expect(wrapper.find('.process').exists()).toBe(false);
});

const wrapper2 = mount(<CreateEmployeeFrom dispatch={jest.fn()} />);

test('should call handleSubmit when submit', () => {
  const spy = jest.spyOn(wrapper2.instance(), 'handleSubmit');
  wrapper2.setState({ firstname: 'ff', lastname: 'll', salary: '10' });
  wrapper2.find('#createEmployeeBtn').at(1).simulate('click');
  expect(spy).toHaveBeenCalledTimes(1);
});

test('should reset form when created', () => {
  const spy = jest.spyOn(wrapper2.instance(), 'componentWillReceiveProps');
  wrapper2.setState({ firstname: 'ff', lastname: 'll', salary: '10' });
  wrapper2.setProps({ resetForm: true });
  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper2.state('firstname')).toEqual('');
  expect(wrapper2.state('lastname')).toEqual('');
  expect(wrapper2.state('salary')).toEqual('');
});

test('input text should handle onChange', () => {
  wrapper2.find('input[name="firstname"]').simulate('change', { target: { name: 'firstname', value: 'first' } });
  expect(wrapper2.state('firstname')).toEqual('first');
  wrapper2.find('input[name="lastname"]').simulate('change', { target: { name: 'lastname', value: 'last' } });
  expect(wrapper2.state('lastname')).toEqual('last');
  wrapper2.find('input[name="salary"]').simulate('change', { target: { name: 'salary', value: '2000' } });
  expect(wrapper2.state('salary')).toEqual('2000');
});
