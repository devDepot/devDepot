import React, { useState } from 'react';

const AddToCartButton = ({
  dev_selected,
  set_dev_selected,
  in_cart,
  set_cart,
  name,
  hourly_rate,
  email,
}) => {
  const addToCart = () => {
    set_dev_selected(true);
    const dev = {
      name,
      hourly_rate,
      email,
    };
    console.log('dev: ', dev);
    set_cart([...in_cart, dev]);
  };
  console.log(in_cart);
  if (!dev_selected) {
    return (
      <div className="text-center">
        <button
          className="signup-submit-button bg-pink-100 text-black font-bold py-2 px-4 rounded text-lg shadow-md mt-2 mb-3"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AddToCartButton;
