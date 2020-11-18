import React, { Component } from 'react';

// devs prop will be an array of objects

//first step - fetch from DB using necessary criteria for devs and set state
//second step - write a function that maps each dev in state to a relevant JSX
//third step - encapsulate that function into a div

const DevCard = ({ name, stack, hourly_rate, devs, set_devs }) => {

  const collectAllDevs = () => {
    fetch('/developers')
      .then((res) => res.json())
      .then((data) => {
        set_devs([...data.developers]);
    });
  }

  const renderDevs = () => {
    devs.map((dev) => {
      
      const { name, stack, hourly_rate } = dev;

      return (
        <div className="dev-card">
          <img src="#" alt="dev-pic" />
          <h4>
            <b>{name}</b>
          </h4>
          <p>
            Tech Stack:
            {stack}
          </p>
          <p>
            Hourly Rate:
            {hourly_rate}
          </p>
        </div>
      )
    });
  }

  return (
    <div>
      {renderDevs}
    </div>
  );
};

export default DevCard;
