import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const LoginPage = ({ isLoggedIn, setIsLoggedIn, isDevUser, setUser, username, setUsername, password, setPassword, history }) => {
  const requestHeaders = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const directUser = (username, password) => {
    fetch('/auth', requestHeaders)
      .then(res => res.json())
      .then(data => {
        if (data.userType === developer ? history.push('/dev-aboutme') : history.push('/homepage'));
        if (!data.userType) history.push('/');
      });
  };

  return (
    <div>
      <p>DevDepot Sign In</p>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          id='username'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username}
          >
        </input>
        <label htmlFor='password'>Password: </label>
        <input
          type='text'
          name='password'
          placeholder='Password'
          id='password'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={password}
          >
        </input>
        <button onClick={directUser}>
          Login
        </button>
    </div>
  );
};

export default withRouter(LoginPage);