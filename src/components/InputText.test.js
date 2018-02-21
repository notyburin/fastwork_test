import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputText from './InputText';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<InputText name="name" placeholder="placeholder" value="value" onChange={() => {}} />);

test('should set props correctly', () => {
  expect(wrapper.props().name).toEqual('name');
  expect(wrapper.props().placeholder).toEqual('placeholder');
  expect(wrapper.props().value).toEqual('value');
  expect(wrapper.props().onChange).toBeInstanceOf(Function);
});
