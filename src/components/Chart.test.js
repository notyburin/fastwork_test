import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Doughnut } from 'react-chartjs-2';
import { Chart, setupData } from './Chart';

Enzyme.configure({ adapter: new Adapter() });

test('should render chart correctly', () => {
  const wrapper = shallow(<Chart />);
  expect(wrapper.find(Doughnut).exists()).toBe(true);
});

test('should setup chart data correctly', () => {
  const color = [
    '#7FFFD4',
    '#FFE4C4',
    '#0000FF',
    '#8A2BE2',
    '#A52A2A',
    '#5F9EA0',
    '#7FFF00',
    '#FF7F50',
    '#6495ED',
    '#DC143C',
    '#00008B',
    '#B8860B',
    '#006400',
    '#8B008B',
    '#FF8C00',
  ];
  const data = [
    { firstname: 'aa', lastname: 'aa', salary: '10' },
    { firstname: 'bb', lastname: 'bb', salary: '20' },
  ];
  const expectedData = {
    datasets: [{
      data: ['10', '20'],
      backgroundColor: color,
    }],
    labels: ['aa aa', 'bb bb'],
  };
  expect(setupData(data)).toEqual(expectedData);
});
