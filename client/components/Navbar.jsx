import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';

const Navbar = ({ in_cart }) => {
  return (
    <div>
      <span>
        <Link to="/homepage">Home</Link>
      </span>
      {/* conditional rendering of cart here */}
      <span>
        <CartModal in_cart={in_cart} />
      </span>
    </div>
  );
};

export default Navbar;
