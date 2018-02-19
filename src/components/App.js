import React from 'react';
import styled from 'styled-components';

import CreateEmployeeFrom from './CreateEmployeeFrom';
import EmployeesTable from './EmployeesTable';
import Chart from './Chart';

const Header = styled.div`
  text-align: center;
  background-color: DeepSkyBlue;
  padding: 40px 0;
`;

const Content = styled.div`
  margin-top: 40px;
`;

const TitleTable = styled.h3`
  color: LightSlateGray;
  padding-bottom: 20px;
`;

const App = () => (
  <div>
    <Header>
      <CreateEmployeeFrom />
    </Header>
    <Content className="container">
      <TitleTable>Employees list</TitleTable>
      <div className="row" style={{ maginTop: 40 }}>
        <div className="col">
          <EmployeesTable />
        </div>
        <div className="col">
          <Chart />
        </div>
      </div>
    </Content>
  </div>
);

export default App;
