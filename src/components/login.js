import React, {Component} from 'react';
import PropTypes from 'prop-types';
import login from '../api/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {html: ''};
  }

  handleLogin = () => {
    let htmlString = login();
    this.setState((state) => {
      return {html: htmlString}
    });

  }

  render () {
    return (
      <div id="login">
        <button onClick={this.handleLogin}>Login with Request</button>
        <div id="login-form">
        </div>
      </div>
    );
  }
}

export default Login;