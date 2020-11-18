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
    <div className="flex justify-center content-center w-1/4 m-auto my-64 shadow-xl">
      <form className="flex flex-col justify-center items-center border-solid border border-blue-600 py-4 px-4 rounded">
        <h1 className="text-2xl">DevDepot</h1>
        <div className="space-x-3">
          <br></br>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => history.push('/dev-signup')}>
            Developer
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => history.push('/employer-signup')}>
            Employer
          </button>
        </div>
        <br></br>
        <div>Already have an account? Login <Link to="/login">here</Link></div>
      </form>
    </div>
  );
};

export default withRouter(RegistrationPage);