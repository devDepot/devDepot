/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

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
  history
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
      userType: 'Employer',
    }),
  };

  const registerEmployer = () => {
    fetch('/user', requestHeaders).then((res) => {
      if (res.status === 200) {
        set_login(true);
        history.push('/homepage');
      } else {
        history.push('/employer-signup');
      }
    });
  };

  return (
    <form>
      <p>Employer Signup</p>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name'
          id='name'
          onChange={(e) => {
            set_name(e.target.value)
          }}
          value={name}
        >
        </input>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='email'
          id='email'
          onChange={(e) => {
            set_email(e.target.value)
          }}
          value={email}
        >
        </input>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          id='username'
          onChange={(e) => {
            set_username(e.target.value)
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
            set_password(e.target.value)
          }}
          value={password}
        >
        </input>
        <label htmlFor='company'>Company (optional): </label>
        <input
          type='text'
          name='company'
          placeholder='Company'
          id='company'
          onChange={(e) => {
            set_company(e.target.value)
          }}
          value={company}
        >
        </input>
        <label htmlFor='aboutme'>Tell Us About Yourself: </label>
        <textarea
          type='text'
          name='aboutme'
          placeholder='Tell Us About Yourself...'
          id='aboutme'
          onChange={(e) => {
            set_about(e.target.value)
          }}
          value={about}
        >
        </textarea>
        <button onClick={registerEmployer}>
          Signup
        </button>
    </form>
  );
};

export default withRouter(EmployerSignup);