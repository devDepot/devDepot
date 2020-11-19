import React, { useState } from 'react';

const AddToCartButton = ({ 
  dev_selected,
  set_dev_selected,
  in_cart,
  set_cart,
  name,
  hourly_rate
}) => {
  const addToCart = () => {
    set_dev_selected(true);
    const dev = {
      name: name,
      hourly_rate: hourly_rate,
    }
    console.log('dev: ', dev);
    set_cart([...in_cart, dev]);
  }
  console.log(in_cart);
  if (!dev_selected) {
    return (
      <div>
        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    )
  } else {
    return (
      <div></div>
    );
  }
}

export default AddToCartButton;