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
      username,
      password,
    }),
  };

  const directUser = () => {
    fetch('http://localhost:3000/login', requestHeaders)
      .then((res) => {
        return res.json();
      })
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
    <div className="signin-splitback h-screen overflow-hidden">
      <div className="signin-container w-1/3 m-0 m-auto border-solid border-2 border-indigo-500 rounded-xl">
        <h1 className="sign-in-text text-center">DevDepot Sign In</h1>
        <div className="signin-form mt-10">
          <div className="w-1/3 m-0 m-auto">
            <label className="signin-label" htmlFor="username">Username: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                onChange={(e) => {
                  set_username(e.target.value);
                }}
                value={username}
              />
            </div>
          </div>
          <br />
          <div className="w-1/3 m-0 m-auto">
            <label className="signin-label" htmlFor="password">Password: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="password"
                placeholder="Password"
                id="password"
                onChange={(e) => {
                  set_password(e.target.value);
                }}
                value={password}
              />
            </div>
          </div>
          <div className="w-1/3 tm-0 m-auto text-center">
            <button
              className="signup-submit-button bg-pink-200 text-black font-bold py-2 px-4 rounded text-lg shadow-md mt-16 mb-4 animate-bounce motion-reduce"
              onClick={directUser}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
