import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import dev from '../public/dev.png';

const DeveloperSignup = ({
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
  image,
  set_image,
  history,
}) => {
  const requestHeaders = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      username,
      password,
      stack,
      hourly_rate,
      about,
      active: true,
      user_type: 'Developer',
      image,
    }),
  };

  const registerDev = () => {
    console.log('IMAGE registerDev', image)
    fetch('http://localhost:3000/user', requestHeaders).then((res) => {
      if (res.status === 200) {
        set_login(true);
        set_user(true);
        history.push('/user-container');
      } else {
        history.push('/dev-signup');
      }
    });
  };

  return (
    <div className="dev-splitback h-screen overflow-hidden">
      <div className="w-2/3 m-0 m-auto mt-2 w-8/12">
        <h1 className="dev-signup-text text-center">Developer Sign Up</h1>
        <div className="relative clear-right float-right mt-40">
          <img src={dev} alt="dev signup carrots" className="dev-signup-img" />
        </div>
        <div className="dev-signup-form ml-2 mt-10">
          <div className="w-1/3">
            <label className="dev-signup-label" htmlFor="name"> Your name: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="name"
                placeholder=" Richard Henderson"
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
            <label className="dev-signup-label" htmlFor="email"> Your e-mail: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="email"
                placeholder=" rhenderson@gmail.com"
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
            <label className="dev-signup-label" htmlFor="username"> Your username: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="username"
                placeholder=" PiedPiper007"
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
            <label className="dev-signup-label" htmlFor="password"> Your password: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="password"
                placeholder=" emacsovervim"
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
            <label className="dev-signup-label" htmlFor="stack">Tech Stack: </label>
            <select
              className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
              name="stack"
              id="stack"
              onChange={(e) => {
                set_stack(e.target.value);
              }}
              value={stack}
            >
              <option value="" />
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </div>
          <br />
          <div className="w-1/3">
            <label className="dev-signup-label" htmlFor="hourly_rate">Hourly Rate: </label>
            <div>
              <input
                className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
                type="text"
                name="hourlyRate"
                placeholder=" Hourly Rate"
                id="hourlyRate"
                onChange={(e) => {
                  set_hourly_rate(e.target.value);
                }}
                value={hourly_rate}
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
              placeholder=" Tell Us About Yourself..."
              id="aboutme"
              onChange={(e) => {
                set_about(e.target.value);
              }}
              value={about}
            />
          </div>
          <div>
            <label htmlFor='addProfilePic'>Add a Profile Picture: </label>
            <input
              type="text"
              name="profile-pic"
              placeholder="Add Image URL"
              id="profile-pic"
              onChange={(e) => {
                set_image(e.target.value);
              }}
              value={image}
            />
          </div>
          <div className="w-1/3 text-center">
            <button 
              className="signup-submit-button bg-pink-100 text-black font-bold py-2 px-4 rounded text-lg shadow-md mt-16 mb-4 animate-bounce motion-reduce"
              onClick={registerDev}>
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DeveloperSignup);
