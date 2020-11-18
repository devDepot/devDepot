import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Homepage from './Homepage';
import DeveloperAboutMe from './DeveloperAboutMe';
import NavBar from './NavBar';

const UserContainer = ({ is_dev_user }) => {
  if (is_dev_user === true) {
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <EmployerAboutMe />
        </div>
      </div>
    )
  }
  if (is_dev_user === false) {
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <Homepage />
        </div>
      </div>
    )
  }
}

export default withRouter(UserContainer);