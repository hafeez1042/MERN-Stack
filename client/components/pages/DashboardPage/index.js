import React from 'react';
import { Link } from 'react-router-dom';
import authorizedAccess from 'Components/HOC/authorizedAccess';

const DashboardPage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Welcome to Dashboard...</h1>
        <p>This is a Dashboard placeholder</p>
        <hr />
        <Link to="/logout" className="btn btn-link">Logout</Link>
      </div>
    </div>
  );
};

export default authorizedAccess(DashboardPage);
