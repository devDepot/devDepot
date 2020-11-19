import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';

const DevCard = ({name, stack, hourly_rate, image, in_cart, set_cart }) => {
  const [dev_selected, set_dev_selected] = useState(false);

  return (
  <div>
    <img src={image} alt="dev-pic" />
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
  )
}

export default DevCard;