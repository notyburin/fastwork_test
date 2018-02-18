import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'noty'
    }
  }

  componentDidMount() {
    axios.get('/employees')
      .then((response) => {
        this.setState({
          firstname: response.data[0].firstname
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setFirstname(name) {
    this.setState({
      firstname: name
    });
  }

  render() {
    return (
      <div>
        Hello {this.state.firstname}
      </div>
    );
  }
}

export default App;
