import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

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
      active: true,
      user_type: 'Developer',
    }),
  };

  const registerDev = () => {
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
    <div>
      <p>Developer Signup</p>
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
          placeholder='Email'
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
        <label htmlFor='stack'>Tech Stack: </label>
        <select
          name="stack"
          id="stack"
          onChange={(e) => {
            set_stack(e.target.value)
          }}
          value={stack}
        >
          <option value=""></option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <label htmlFor='hourly_rate'>Hourly Rate: </label>
        <input
          type='text'
          name='hourlyRate'
          placeholder='Hourly Rate'
          id='hourlyRate'
          onChange={(e) => {
            set_hourly_rate(e.target.value)
          }}
          value={hourly_rate}
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
        <button onClick={registerDev}>
          Signup
        </button>
    </div>
  ) 
}

export default withRouter(DeveloperSignup);