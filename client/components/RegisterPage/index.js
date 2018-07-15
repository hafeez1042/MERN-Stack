import React from 'react';
import RgisterForm from '../RegisterForm';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="bg-light rounded p-4 m-4">
            <h1>Register</h1>
            <hr />
            <RgisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};
