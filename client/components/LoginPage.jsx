import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const LoginPage = ({ isLoggedIn, isEngineerUser, history }) => {
  if (isLoggedIn && isEngineerUser) {
    return <Redirect to="/engineer-aboutme" />;
  };
  if (isLoggedIn && !isEngineerUser) {
    return <Redirect to="/homepage" />;
  };

  return (
    <div>
      <p>DevDepot</p>
      <button onClick={() => history.push('/engineer-signup')}>
        Engineer
      </button>
      <button onClick={() => history.push('/seeker-signup')}>
        Looking to Hire
      </button>
      <p>Already have an account? Login <a><Link to="/login" >here</Link></a></p>
    </div>
  );
};

export default withRouter(LoginPage);