import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperAboutMe = ({
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
        Tech Stack: {techStack}
      </span>
      <span>
        Hourly Rate: {hourlyRate}
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