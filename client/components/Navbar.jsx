import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/homepage">About</Link>
      </li>
    </ul>
  );
};

export default Navbar;
