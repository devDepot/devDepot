import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import DevCard from './DevCard';
import Navbar from './Navbar';

// TODO: once dev has been added to cart, prevent default clicking

const addToCart = ({ inCart, setInCart, dev_selected, set_dev_selected }) => {
  if (dev_selected) {
    alert('This Developer has already been added to your cart!');
  }
};

const Homepage = ({ username, is_dev_user, history, in_cart, set_in_cart, dev_selected, set_dev_selected, devs, set_devs }) => {

  return (
    <div>
      <h1>
        Hello,
        {username}
      </h1>
      <div>
        <DevCard />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
