import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';

const Navbar = ({}) => {
  return (
    <div>
      <span>
        <Link to="/homepage">Home</Link>
      </span>
      {/* conditional rendering of cart here */}
      <span>
        <CartModal />
      </span>
    </div>
  );
};

export default Navbar;
