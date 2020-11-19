import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import DevCardContainer from './DevCardContainer';

// TODO: once dev has been added to cart, prevent default clicking

const Homepage = ({
  username,
  name,
  hourly_rate,
  is_dev_user,
  history,
  in_cart,
  set_cart,
  devs,
  employer_email,
  email,
  set_devs,
}) => {
  return (
    <div className="bg-gradient-to-t from-purple-600 h-screen overflow-hidden">
      <h1 className="text-center card-text mt-10 mb-4">
        Hello,
        {username}
      </h1>
      <div>
        <DevCardContainer
          is_dev_user={is_dev_user}
          in_cart={in_cart}
          set_cart={set_cart}
          devs={devs}
          set_devs={set_devs}
          name={name}
          hourly_rate={hourly_rate}
          email={email}
        />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
