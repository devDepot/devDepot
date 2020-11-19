import React, { useState } from 'react';

const AddToCartButton = ({ 
  dev_selected,
  set_dev_selected,
  in_cart,
  set_in_cart,
  name,
  hourly_rate
}) => {
  const addToCart = () => {
    set_dev_selected(true);
    const dev = {
      name: name,
      hourly_rate: hourly_rate,
    }
    set_in_cart([...in_cart, dev]);
  }
  if (!dev_selected) {
    return (
      <div>
        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    )
  }
}

export default AddToCartButton;