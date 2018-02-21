import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchEmployee } from '../actions';

export class EmployeesTable extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployee());
  }

  render() {
    const { employeeList, isFetching } = this.props;
    return (
      isFetching ?
        <h3>loading...</h3> :
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeList.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.salary}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    );
  }
}

EmployeesTable.propTypes = {
  isFetching: PropTypes.bool,
  employeeList: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

EmployeesTable.defaultProps = {
  isFetching: false,
  employeeList: [],
};

const mapStateToProps = (state) => {
  const { isFetching, employeeList } = state;
  return { isFetching, employeeList };
};

export default connect(mapStateToProps)(EmployeesTable);
