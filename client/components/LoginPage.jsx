import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const LoginPage = ({
  is_logged_in,
  set_login,
  is_dev_user,
  set_user,
  username,
  set_username,
  password,
  set_password,
  history,
}) => {
  const requestHeaders = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const directUser = () => {
    fetch('http://localhost:3000/auth', requestHeaders)
      .then((res) => res.json())
      .then((data) => {
        if (data.user_type === 'Developer') {
          localStorage.setItem('devdepot_sid', data.token);
          history.push('/dev-aboutme');
        } else {
          localStorage.setItem('devdepot_sid', data.token);
          history.push('/homepage');
        }
        if (!data.user_type) history.push('/');
      });
  };

  return (
    <div>
      <p>DevDepot Sign In</p>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        id="username"
        onChange={(e) => {
          set_username(e.target.value);
        }}
        value={username}
      ></input>
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        placeholder="Password"
        id="password"
        onChange={(e) => {
          set_password(e.target.value);
        }}
        value={password}
      ></input>
      <button onClick={directUser}>Login</button>
    </div>
  );
};

export default withRouter(LoginPage);
