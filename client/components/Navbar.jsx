import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// TODO: add a cart
const Navbar = () => {
  return (
    <div>
      <span>
        <Link to="/homepage">Home</Link>
      </span>
    </div>
  );
};

export default Navbar;
