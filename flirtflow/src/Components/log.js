import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

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
                <Signup onSwitchToSignIn={this.toggleForm} />
                )}
        </div>
    );
  }
}

export default AuthPage;
