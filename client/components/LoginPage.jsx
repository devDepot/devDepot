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
  name,
  set_name,
  stack,
  set_stack,
  hourly_rate,
  set_hourly_rate,
  email,
  set_email,
  company,
  set_company,
  about,
  set_about,
  history,
}) => {
  const requestHeaders = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const directUser = () => {
    fetch('http://localhost:3000/login', requestHeaders)
      .then((res) => {
        return res.json()})
      .then((data) => {
        console.log('data: ', data);
        if (data.user_type === 'Developer') {
          localStorage.setItem('devdepot_sid', data.token);
          set_login(true);
          set_user(true);
          set_name(data.user_info.name);
          set_stack(data.user_info.stack);
          set_hourly_rate(data.user_info.hourly_rate);
          set_about(data.user_info.about);
          history.push('/dev-aboutme');
        } else {
          localStorage.setItem('devdepot_sid', data.token);
          set_login(true);
          set_name(data.user_info.name);
          set_email(data.user_info.email);
          set_company(data.user_info.company);
          set_about(data.user_info.about);
          history.push('/user-container');
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
