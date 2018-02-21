import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import CreateEmployeeFrom from './CreateEmployeeFrom';
import EmployeesTable from './EmployeesTable';
import Chart from './Chart';

Enzyme.configure({ adapter: new Adapter() });

test('should render correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CreateEmployeeFrom).exists()).toBe(true);
  expect(wrapper.find(EmployeesTable).exists()).toBe(true);
  expect(wrapper.find(Chart).exists()).toBe(true);
});
