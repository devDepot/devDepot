import React, { Component } from 'react';

// devs prop will be an array of objects

const DevCard = ({ name, techStack, hourlyRate }) => {
  return (
    <div className="dev-card">
      <img src="#" alt="dev-pic" />
      <h4>
        <b>{name}</b>
      </h4>
      <p>
        Tech Stack:
        {techStack}
      </p>
      <p>
        Hourly Rate:
        {hourlyRate}
      </p>
    </div>
  );
};

export default DevCard;
