import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const LoginPage = ({ isLoggedIn, isDevUser, history }) => {
  // const directUser = () => {
    
  // }
  
  return (
    <div>
      <p>DevDepot Sign In</p>
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
        <button onClick={() => history.push('/dev-aboutme')}>
          Login
        </button>
    </div>
  );
};

export default withRouter(LoginPage);