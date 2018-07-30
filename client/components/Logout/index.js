import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'Actions/authActions';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  props.logout();
  return (
    <div>
      <h2>You have been successfully logged out!</h2>
      {props.redirect ?
        <Redirect to={props.redirect} />
        : null}
    </div>
  );
};

export default connect(null, { logout })(Logout);
