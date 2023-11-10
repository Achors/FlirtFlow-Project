import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import AddUser from './SignupForm'

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true, 
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    return (
      <div>
            {this.state.isLogin ? (
                <Login onSwitchToSignUp={this.toggleForm} />
                ) : (
                <AddUser onSwitchToSignIn={this.toggleForm} />
                )}
        </div>
    );
  }
}

export default AuthPage;
