import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { EmployeesTable } from './EmployeesTable';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<EmployeesTable dispatch={jest.fn()} />);

test('should render loading when fetching', () => {
  wrapper.setProps({ isFetching: true });
  expect(wrapper.find('h3').exists()).toBe(true);
});

test('should render table when fetch done', () => {
  wrapper.setProps({ isFetching: false });
  expect(wrapper.find('.table').exists()).toBe(true);
});

test('should call componentDidMount', () => {
  const spy = jest.spyOn(EmployeesTable.prototype, 'componentDidMount');
  mount(<EmployeesTable dispatch={jest.fn()} />);
  expect(spy).toHaveBeenCalled();
});
