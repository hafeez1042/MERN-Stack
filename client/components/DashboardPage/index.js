import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import authorizedAccess from '../HOC/authorizedAccess';

class DashboardPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Dashboard...</h1>
          <p>This is a Dashboard placeholder</p>
          <hr />
          <button className="btn btn-link" onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { logout })(
  authorizedAccess(DashboardPage)
);
