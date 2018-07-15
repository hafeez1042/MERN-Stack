// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import { Input, Spinner } from '../common';

import { register } from '../../actions/authActions';

class RegisterForm extends Component {
  render() {
    if (this.props.auth.user && this.props.auth.user.email) {
      return <Redirect to="/dashboard" />;
    }

    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit((value) => this.props.register(value))}>
        {this.props.auth.error && this.props.auth.error.message ?
          <div className="alert alert-danger" role="alert">{this.props.auth.error.message}</div>
          : null
        }
        <fieldset disabled={this.props.auth.loading}>
          <Field component={Input} required name="name" label="Name" placeholder="Enter full name..." type="text" />
          <Field component={Input} required name="email" label="Email" placeholder="Enter email..." type="email" />
          <Field component={Input} required name="password" label="Password" placeholder="Enter password..." type="password" />
          <Field component={Input} required name="repassword" label="Repeat Password" placeholder="Enter password again..." type="password" />
        </fieldset>

        <button className="btn btn-primary mt-3" disabled={submitting}>Register</button>
        <Link to="/login" className="btn btn-link mt-3">Login</Link>
        {this.props.auth && this.props.auth.loading ? <Spinner overly /> : null}
      </form>
    );
  }
}

const validate = ({ password, repassword, email }) => {
  const error = {};

  if (!password) {
    error.password = 'Password is required!';
  } else if (password.length < 6) {
    error.password = 'Password must be atleast 6 character long!';
  }

  if (password !== repassword) {
    error.repassword = 'Passwrod does not match!';
  }

  if (!email) {
    error.email = 'Email is required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    error.email = 'Please enter valid email!';
  }

  return error;
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps, { register })(
  reduxForm({
    form: 'RegisterForm',
    validate,
  })(RegisterForm)
);
