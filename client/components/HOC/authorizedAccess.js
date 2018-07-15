import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Authorization = (WrappedComponent) => {
  class WithAuthorization extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { auth } = this.props;
      if (auth.user && auth.user.email) {
        return <WrappedComponent {...this.props} />;
      }
      return (
        <Redirect to="/login" />
        // <div>
        //   <h4>Unauthorized</h4>
        //   <p><Link to="/login">Login</Link> to view this section</p>
        // </div>
      );
    }
  }
  const mapStateToProps = ({ auth }) => {
    return { auth };
  };
  return connect(mapStateToProps)(WithAuthorization);
};

export default Authorization;
