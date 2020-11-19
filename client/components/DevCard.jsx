import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';

const DevCard = ({ name, stack, hourly_rate, image, in_cart, set_cart }) => {
  const [dev_selected, set_dev_selected] = useState(false);

  return (
    // <div>
    //   <img src={image} alt="dev-pic" />
    //   <h4>
    //     <b>{name}</b>
    //   </h4>
    //   <p>
    //     Tech Stack:
    //     {stack}
    //   </p>
    //   <p>
    //     Hourly Rate:
    //     {hourly_rate}
    //   </p>
    //   <div>
    //     <AddToCartButton
    //       dev_selected={dev_selected}
    //       set_dev_selected={set_dev_selected}
    //       in_cart={in_cart}
    //       set_cart={set_cart}
    //       name={name}
    //       hourly_rate={hourly_rate}
    //     />
    //   </div>
    // </div>
    <div className="rounded round-t-lg overflow-hidden shadow max-w-xs my-3 rounded-2xl shadow-xl w-full justify-self-center bg-pink-300">
      <img src={image} alt="dev profile pic" className="dev-pic m-0 m-auto rounded-xl" />
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="dev-name-text">{name}</h3>
        <p className="mt-2 font-light text-grey-dark">{stack} developer</p>
      </div>
      <div className="flex justify-center pb-3 text-grey-dark">
        <div className="text-center">
          <h2 className="dev-text">Hourly Rate:</h2>
          <span>${hourly_rate}</span>
        </div>
      </div>
      <hr />
      <div>
        <AddToCartButton
          dev_selected={dev_selected}
          set_dev_selected={set_dev_selected}
          in_cart={in_cart}
          set_cart={set_cart}
          name={name}
          hourly_rate={hourly_rate}
        />
      </div>
    </div>
  );
};

export default DevCard;
