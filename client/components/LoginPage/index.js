import React, { Component } from 'react';
import LoginForm from '../LoginForm';
class ComponentName extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="bg-light rounded p-4 m-4">
              <h1>Login</h1>
              <hr />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentName;
