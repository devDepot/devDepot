import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';

const Navbar = ({ in_cart }) => {
  return (
    <div className="mx-auto bg-indigo-300 p-5">
      <div className="flex justify-between">
        <div className="flex flex-row navbar-logo">
          <h1>DevDepot</h1>
        </div>
        <ul className="flex flex-row">
          <li className="pr-5">
            <CartModal />
          </li>
          <li className="pr-5 navbar-user">
            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
              <Link to="/employer-aboutme" in_cart={in_cart}>User</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
