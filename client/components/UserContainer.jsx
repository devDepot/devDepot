import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Homepage from './Homepage';
import DeveloperAboutMe from './DeveloperAboutMe';
import NavBar from './Navbar';

const UserContainer = ({
  is_dev_user,
  username,
  name,
  stack,
  email,
  hourly_rate,
  about,
  devs,
  set_devs,
  in_cart,
  set_cart,
  history,
  image,
}) => {
  if (is_dev_user === true) {
    return (
      <div>
        <nav>
          <NavBar in_cart={in_cart} username={username} />
        </nav>
        <div>
          <DeveloperAboutMe
            name={name}
            email={email}
            stack={stack}
            hourly_rate={hourly_rate}
            image={image}
            about={about}
          />
        </div>
      </div>
    );
  }
  if (is_dev_user === false) {
    return (
      <div>
        <nav>
          <NavBar in_cart={in_cart} history={history} />
        </nav>
        <div>
          <Homepage
            username={username}
            name={name}
            hourly_rate={hourly_rate}
            is_dev_user={is_dev_user}
            in_cart={in_cart}
            set_cart={set_cart}
            devs={devs}
            set_devs={set_devs}
          />
        </div>
      </div>
    );
  }
};

export default withRouter(UserContainer);
