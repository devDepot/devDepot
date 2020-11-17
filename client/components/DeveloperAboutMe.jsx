import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperAboutMe = ({ history }) => {
  return (
    <div>
      <p>Developer Profile</p>
      <div>
        Name: 
      </div>
      <div>
        Email:
      </div>
      <div>
        Tech Stack: 
      </div>
      <div>
        Hourly Rate: 
      </div>
      <div>
        About: 
      </div>
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