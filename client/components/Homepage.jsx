import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

// TODO: "Hello, ${user}" should be dynamic, pass username down as props from App component

const displayAllDevs = ({ devs, inCart, devSelected, filterOptions, username }) => {
  
}

const Homepage = ({ history }) => {

  return (
    <div>
      {/* <Navbar /> */}
      <span>
        <h1>Hello, User</h1>
      </span>
      <div className="dev-card-container">

      </div>
    </div>
  )
}

export default withRouter(Homepage);