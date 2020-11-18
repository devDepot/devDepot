/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const EmployerSignup = ({
  isLoggedIn,
  setIsLoggedIn,
  isDevUser,
  setUser,
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  name,
  setName,
  techStack,
  setTechStack,
  hourlyRate,
  setHourlyRate,
  about,
  setAbout,
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
      techStack: techStack,
      hourlyRate: hourlyRate,
      about: about,
      userType: 'Employer',
    }),
  };

  const registerEmployer = () => {
    fetch('/user', requestHeaders)
      .then(res => res.json())
      .then(data => {
        if (res.status === 200) {
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
            setName(e.target.value)
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
            setEmail(e.target.value)
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
            setPassword(e.target.value)
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
            setCompany(e.target.value)
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
            setName(e.target.value)
          }}
          value={about}
        >
        </textarea>
        <button onClick={() => history.push('/homepage')}>
          Signup
        </button>
    </form>
  );
};

export default withRouter(EmployerSignup);