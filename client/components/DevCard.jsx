import React, { Component } from 'react';

// TODO: pass dev name and stack down as props from App componenet
// TODO: onClick / onHover modal should show up with about me

const DevCard = () => {
  return (
    <div className="dev-card">
      <img src="#" alt="dev-pic" />
      <h4>
        <b>Dev Name</b>
      </h4>
      <p>Tech Stack: </p>
      <p>Hourly Rate: </p>
    </div>
  )
}

export default DevCard;