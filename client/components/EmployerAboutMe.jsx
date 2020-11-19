import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Navbar from './Navbar';

const EmployerAboutMe = ({
  is_logged_in,
  set_login,
  isDevUser,
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
  company,
  set_company,
  history,
}) => {
  return (
    <div className="bg-gradient-to-b from-pink-600 h-screen overflow-hidden">
      <Navbar />
      <h2 className="text-center employer-profile-text mt-4">Employer Profile</h2>
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
          Company:
          {company}
        </div>
        <div>
          About:
          {about}
        </div>
      </div>
    </div>
  );
};

export default withRouter(EmployerAboutMe);
