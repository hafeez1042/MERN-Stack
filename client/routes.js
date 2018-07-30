import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'Components/App';
import HomePage from 'Components/pages/HomePage';
import LoginPage from 'Components/pages/LoginPage';
import RegisterPage from 'Components/pages/RegisterPage';
import DashboardPage from 'Components/pages/DashboardPage';
import LogoutPage from 'Components/pages/LogoutPage';

export default () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/" exact component={HomePage} key="HomePage" />
          <Route path="/login" exact component={LoginPage} key="LoginPage" />
          <Route path="/register" exact component={RegisterPage} key="RegisterPage" />
          <Route path="/logout" exact component={LogoutPage} key="LogoutPage" />
          <Route path="/dashboard" exact component={DashboardPage} key="DashboardPage" />
        </Switch>
      </App>
    </Router>
  );
};
