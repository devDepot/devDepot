import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const DeveloperAboutMe = ({
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
  history,
}) => {
  return (
    <div className="bg-gradient-to-b from-green-400 h-screen overflow-hidden">
      <h2 className="text-center employer-profile-text mt-4">Developer Profile</h2>
      <div className="border-solid border-2 border-indigo-500 m-0 m-auto w-3/12 about-me-container rounded-lg shadow-xl mt-10">
        <div>
          Name:
          {name}
        </div>
        <div>
          Email:
          {email}
        </div>
        <div>
          Tech Stack:
          {stack}
        </div>
        <div>
          Hourly Rate:
          {hourly_rate}
        </div>
        <div>
          About:
          {about}
        </div>
      </div>
    </div>
  );
};

export default withRouter(DeveloperAboutMe);
