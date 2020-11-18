import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import DevCard from './DevCard';
import Navbar from './Navbar';

// TODO: once dev has been added to cart, prevent
const addToCart = ({ inCart, setInCart, devSelected, setDevSelected }) => {
  if (devSelected) {
    alert('This Developer has already been added to your cart!');
  }
};

const showAllDevs = ({ devs, setDevs }) => {
  const allDevs = [];

  fetch('/developers')
    .then((res) => res.json())
    .then((data) => {
      setDevs([data.developers]);
      allDevs.forEach((dev) => devs.push(<DevCard />));
    });

  return (
    <div>
      <div className="dev-cards">
        {allDevs}
        <button onClick={addToCart} />
      </div>
    </div>
  );
};

const Homepage = ({ user, history, inCart, setInCart, devSelected, setDevSelected }) => {
  return (
    <div>
      <Navbar />
      <h1>
        Hello,
        {user}
      </h1>
      <div>
        <showAllDevs />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
