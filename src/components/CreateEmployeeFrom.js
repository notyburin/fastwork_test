import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createEmployee, resetFormSuccess, fetchEmployee } from '../actions';
import InputText from './InputText';

const Process = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const TextProcess = styled.h4`
  margin-top: 80px;
  color: white;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 40px;
`;

const Button = styled.button`
  border: 1px solid white;
  width: 100%;
  background-color: DeepSkyBlue;
`;

const required = value => !value.toString().trim().length;
const isNumeric = number => !isNaN(parseFloat(number)) && isFinite(number);

class CreateEmployeeFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      salary: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.resetForm);
    if (nextProps.resetForm) {
      this.setState({
        firstname: '',
        lastname: '',
        salary: '',
      }, () => {
        const { dispatch } = nextProps;
        dispatch(resetFormSuccess());
        dispatch(fetchEmployee());
      });
    }
  }

  handleInputChange(e) {
    const { target } = e;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { firstname, lastname, salary } = this.state;
    const data = { firstname, lastname, salary };
    if (required(firstname) || required(lastname) || required(salary)) {
      alert('Please fill all field!!');
    } else if (!isNumeric(salary)) {
      alert('Field salary require number only!!');
    } else {
      dispatch(createEmployee(data));
    }
  }

  render() {
    const { isProcess } = this.props;
    const { firstname, lastname, salary } = this.state;
    return (
      <div className="container">
        {
          isProcess &&
          <Process>
            <TextProcess>Process...</TextProcess>
          </Process>
        }
        <Title>Create employee</Title>
        <div className="row">
          <div className="col">
            <InputText
              name="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col">
            <InputText
              name="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col">
            <InputText
              name="salary"
              placeholder="Salary"
              value={salary}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col">
            <Button className="btn btn-primary" onClick={this.handleSubmit}>Create</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isProcess, resetForm } = state;
  return { isProcess, resetForm };
};

export default connect(mapStateToProps)(CreateEmployeeFrom);
