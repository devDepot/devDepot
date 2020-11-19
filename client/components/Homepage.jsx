import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import DevCardContainer from './DevCardContainer';

// TODO: once dev has been added to cart, prevent default clicking

const Homepage = ({
  username,
  name,
  hourly_rate,
  is_dev_user,
  history,
  in_cart,
  set_cart,
  devs,
  employer_email,
  email,
  set_devs,
  filter_options,
  set_filter_options
}) => {

  return (
    <div>
      <h1>
        Hello,
        {username}
      </h1>
      <div>
        <label className="filter" htmlFor="stack">Search For: </label>
          <select
            className="border-solid border-2 border-indigo-800 rounded-lg outline-none w-full shadow-md"
            name="filter"
            id="filter"
            onChange={(e) => {
              set_filter_options(e.target.value);
            }}
            value={filter_options}
          >
            <option value="" />
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
      </div>
      <div>
        <DevCardContainer
          is_dev_user={is_dev_user}
          in_cart={in_cart}
          set_cart={set_cart}
          devs={devs}
          set_devs={set_devs}
          name={name}
          hourly_rate={hourly_rate}
          email={email}
          filter_options={filter_options}
          set_filter_options={set_filter_options}
        />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
