import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperSignup = ({ 
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
      userType: 'Developer',
    }),
  };

  const registerDev = () => {
    fetch('/user', requestHeaders)
      .then(res => res.json())
      .then(data => {
        if (res.status === 200) {
          history.push('/dev-aboutme');
        } else {
          history.push('/dev-signup');
        }
      });
  };
  
  return (
    <form>
      <p>Developer Signup</p>
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
          placeholder='Email'
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
        <label htmlFor='techStack'>Tech Stack: </label>
        <select
          name="techStack"
          id="techStack"
          onChange={(e) => {
            setTechStack(e.target.value)
          }}
          value={techStack}
        >
          <option value=""></option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <label htmlFor='hourlyRate'>Hourly Rate: </label>
        <input
          type='text'
          name='hourlyRate'
          placeholder='Hourly Rate'
          id='hourlyRate'
          onChange={(e) => {
            setHourlyRate(e.target.value)
          }}
          value={hourlyRate}
        >
        </input>
        <label htmlFor='aboutme'>Tell Us About Yourself: </label>
        <textarea
          type='text'
          name='aboutme'
          placeholder='Tell Us About Yourself...'
          id='aboutme'
          onChange={(e) => {
            setAbout(e.target.value)
          }}
          value={about}
        >
        </textarea>
        <button onClick={registerDev}>
          Signup
        </button>
    </form>
  ) 
}

export default withRouter(DeveloperSignup);