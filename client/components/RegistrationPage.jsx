import React, { useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const RegistrationPage = ({ isLoggedIn, setIsLoggedIn, isDevUser, setUser, username, setUsername, history }) => {
  // If a user is logged in they should not have access to signup or login, they will be redirected straight to respective homepage

  useEffect(() => {
    fetch('/auth')
      .then(res => res.json())
      .then(data => {
        if (data.isLoggedIn) setIsLoggedIn(true);
        if (data.isDevUser) setUser(true);
        if (data.username) setUsername(data.username);
      });
  }, []);

  if (isLoggedIn && isDevUser) {
    return <Redirect to="/dev-aboutme" />;
  };
  if (isLoggedIn && !isDevUser) {
    return <Redirect to="/homepage" />;
  };

  return (
    <div>
      <p>DevDepot</p>
      <button onClick={() => history.push('/dev-signup')}>
        Developer
      </button>
      <button onClick={() => history.push('/employer-signup')}>
        Looking to Hire
      </button>
      <div>Already have an account? Login <Link to="/login">here</Link></div>
    </div>
  );
};

export default withRouter(RegistrationPage);