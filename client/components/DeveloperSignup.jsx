import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperSignup = ({ isLoggedIn, isDevUser, username, history }) => {
  return (
    <form>
      <p>Developer Signup</p>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name'
          id='name'>
        </input>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          id='email'>
        </input>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          id='username'>
        </input>
        <label htmlFor='password'>Password: </label>
        <input
          type='text'
          name='password'
          placeholder='Password'
          id='password'>
        </input>
        <label htmlFor='techStack'>Tech Stack: </label>
        <select
          name="techStack"
          id="techStack"
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
          id='hourlyRate'>
        </input>
        <label htmlFor='aboutme'>Tell Us About Yourself: </label>
        <textarea
          type='text'
          name='aboutme'
          placeholder='Tell Us About Yourself...'
          id='aboutme'>
        </textarea>
        <button onClick={() => history.push('/dev-aboutme')}>
          Signup
        </button>
    </form>
  ) 
}

export default withRouter(DeveloperSignup);