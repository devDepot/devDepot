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
    <div className="rounded round-t-lg overflow-hidden shadow max-w-xs my-3">
      <img src={image} alt="dev profile pic" />
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-sm bold">{name}</h3>
        <p className="mt-2 font-light text-grey-dark">{stack}</p>
      </div>
      <div className="flex justify-center pb-3 text-grey-dark">
        <div className="text-center">
          <h2>Hourly Rate:</h2>
          <span>{hourly_rate}</span>
        </div>
      </div>
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
