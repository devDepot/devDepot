/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import employer from '../public/employer.png';

const EmployerSignup = ({
  is_logged_in,
  set_login,
  is_dev_user,
  set_user,
  username,
  set_username,
  password,
  set_password,
  email,
  set_email,
  name,
  set_name,
  stack,
  set_stack,
  hourly_rate,
  set_hourly_rate,
  about,
  set_about,
  company,
  set_company,
  image,
  set_image,
  history,
}) => {
  const requestHeaders = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      username: username,
      password: password,
      stack: stack,
      hourly_rate: hourly_rate,
      about: about,
      user_type: 'Employer',
    }),
  };

  const registerEmployer = () => {
    fetch('http://localhost:3000/user', requestHeaders).then((res) => {
      if (res.status === 200) {
        set_login(true);
        history.push('/user-container');
      } else {
        history.push('/employer-signup');
      }
    });
  };

  return (
    <div className="employer-splitback h-screen overflow-hidden">
      <div className="w-2/3 m-0 m-auto mt-2 w-8/12">
        <h1 className="employer-signup-text text-center">Employer Sign Up</h1>
        <div className="relative clear-right float-right mt-40">
          <img src={employer} alt="employer signup" className="employer-signup-img" />
        </div>
        <div className="employer-signup-form ml-2 mt-10">
          <div className="w-1/3">
            <label className="employer-signup-label" htmlFor="name"> Your Name: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="name"
                placeholder="Russ Hanneman"
                id="name"
                onChange={(e) => {
                  set_name(e.target.value);
                }}
                value={name}
              />
            </div>
          </div>
          <br />
          <div className="w-1/3">
            <label className="employer-signup-label" htmlFor="email"> Your Email: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="email"
                placeholder="hanneman@aol.com"
                id="email"
                onChange={(e) => {
                  set_email(e.target.value);
                }}
                value={email}
              />
            </div>
          </div>
          <br />
          <div className="w-1/3">
            <label className="employer-signup-label" htmlFor="username">Username: </label>
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
          <div className="w-1/3">
            <label className="employer-signup-label" htmlFor="password"> Your Password: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="password"
                placeholder="trescommas"
                id="password"
                onChange={(e) => {
                  set_password(e.target.value);
                }}
                value={password}
              />
            </div>
          </div>
          <br />
          <div className="w-1/3">
            <label className="employer-signup-label" htmlFor="company"> Your Company (optional): </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="company"
                placeholder="Russfest"
                id="company"
                onChange={(e) => {
                  set_company(e.target.value);
                }}
                value={company}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="w-1/3">
            <textarea
              className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
              type="text"
              name="aboutme"
              placeholder="Tell Us About Yourself..."
              id="aboutme"
              onChange={(e) => {
                set_about(e.target.value);
              }}
              value={about}
            />
          </div>
          <div className="w-1/3 text-center">
            <button 
              className="signup-submit-button bg-pink-100 text-black font-bold py-2 px-4 rounded text-lg shadow-md mt-16 mb-4 animate-bounce motion-reduce"
              onClick={registerEmployer}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EmployerSignup);
