import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

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

export const setupData = (employeeList) => {
  const salaryList = [];
  const nameList = [];
  employeeList.forEach((list) => {
    salaryList.push(list.salary);
    nameList.push(`${list.firstname} ${list.lastname}`);
  });

  return {
    datasets: [{
      data: salaryList,
      backgroundColor: color,
    }],
    labels: nameList,
  };
};

export const Chart = (props) => {
  const { employeeList } = props;
  const chartData = setupData(employeeList);
  const chartOptions = { legend: { position: 'right' } };

  return (
    <Doughnut data={chartData} options={chartOptions} />
  );
};

Chart.propTypes = {
  employeeList: PropTypes.array,
};

Chart.defaultProps = {
  employeeList: [],
};

const mapStateToProps = (state) => {
  const { employeeList } = state;
  return { employeeList };
};

export default connect(mapStateToProps)(Chart);
