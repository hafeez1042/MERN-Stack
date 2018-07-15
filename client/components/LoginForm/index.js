// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import { Input, Checkbox, Spinner } from '../common';

import { login } from '../../actions/authActions';

class LoginForm extends Component {
  render() {
    if (this.props.auth.user && this.props.auth.user.email) {
      return <Redirect to="/dashboard" />;
    }

    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit((value) => this.props.login(value))}>
        {this.props.auth.error && this.props.auth.error.message ?
          <div className="alert alert-danger" role="alert">{this.props.auth.error.message}</div>
          : null
        }
        <fieldset disabled={this.props.auth.loading}>
          <Field component={Input} required name="email" label="Email" placeholder="Enter username..." type="email" />
          <Field component={Input} required name="password" label="Password" placeholder="Enter password..." type="password" />
          <Field name="remember" component={Checkbox} fieldId="remember">Remember me</Field>
        </fieldset>

        <button className="btn btn-primary mt-3" disabled={submitting}>Login</button>
        <Link to="/register" className="btn btn-link mt-3">Register</Link>
        {this.props.auth && this.props.auth.loading ? <Spinner overly /> : null}
      </form>
    );
  }
}

const validate = ({ email, password }) => {
  const error = {};

  if (!email) {
    error.email = 'Email is required!';
  }
  if (!password) {
    error.password = 'Password is required!';
  }
  return error;
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps, { login })(
  reduxForm({
    form: 'LoginForm',
    validate,
  })(LoginForm)
);
