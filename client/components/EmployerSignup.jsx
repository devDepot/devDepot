/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const EmployerSignup = ({ isLoggedIn, isDevUser, username, history }) => {
  return (
    <form>
      <p>Employer Signup</p>
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
          placeholder='email'
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
        <label htmlFor='company'>Company (optional): </label>
        <input
          type='text'
          name='company'
          placeholder='Company'
          id='company'>
        </input>
        <label htmlFor='aboutme'>Tell Us About Yourself: </label>
        <textarea
          type='text'
          name='aboutme'
          placeholder='Tell Us About Yourself...'
          id='aboutme'>
        </textarea>
        <button onClick={() => history.push('/homepage')}>
          Signup
        </button>
    </form>
  );
};

export default withRouter(EmployerSignup);