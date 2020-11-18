import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperAboutMe = ({
  is_logged_in,
  set_login,
  is_dev_user,
  setUser,
  username,
  set_username,
  password,
  set_password,
  email,
  set_email,
  name,
  setName,
  stack,
  set_stack,
  hourly_rate,
  set_hourly_rate,
  about,
  set_about,
  history
}) => {
  return (
    <div>
      <h2>Developer Profile</h2>
      <span>
        Name: {name}
      </span>
      <span>
        Email: {email}
      </span>
      <span>
        Tech Stack: {stack}
      </span>
      <span>
        Hourly Rate: {hourly_rate}
      </span>
      <span>
        About: {about}
      </span>
      {/* <div>
        <label htmlFor='addProfilePic'>Add a Profile Picture: </label>
        <input
          id='addProfilePic'
          value=
          onChange=
          type='text'
        />
        <button onClick=>Add Picture</button>
      </div> */}
      {/* <div>
        Skills:  
        <label htmlFor='SQL'> SQL</label>
        <input
          type='checkbox'
          name='SQL'
          id='SQL'>
        </input>
        <label htmlFor='noSQL'>noSQL</label>
        <input
          type='checkbox'
          name='noSQL'
          id='noSQL'>
        </input>
      </div> */}
    </div>
  )
}

export default withRouter(DeveloperAboutMe);