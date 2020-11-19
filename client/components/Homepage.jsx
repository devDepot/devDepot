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
  set_devs
}) => {
  return (
    <div>
      <h1>
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
        />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
