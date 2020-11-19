import React, { useState, useEffect } from 'react';
import DevCard from './DevCard';

// devs prop will be an array of objects

//first step - fetch from DB using necessary criteria for devs and set state
//second step - write a function that maps each dev in state to a relevant JSX
//third step - encapsulate that function into a div

const DevCardContainer = ({
  name,
  stack,
  hourly_rate,
  devs,
  set_devs,
  in_cart,
  set_cart,
  image,
}) => {
  useEffect(() => {
    fetch('http://localhost:3000/developers')
      .then((res) => res.json())
      .then((data) => {
        set_devs(data);
      });
  }, []);

  const renderDevs = () => {
    return devs.map((dev, index) => {
      const { name, stack, hourly_rate, image, email } = dev;
      console.log('dev in map: ', dev);
      return (
        <DevCard
          key={`dev` + index}
          name={name}
          stack={stack}
          hourly_rate={hourly_rate}
          image={image}
          in_cart={in_cart}
          set_cart={set_cart}
          email={email}
        />
      );
    });
  };
  return <div>{renderDevs()}</div>;
};

export default DevCardContainer;
