import React from 'react'
import Hme from './Hme'
import Pic from "../Assets/OBJECTS.png"
const Delivery = () => {
  const dil={
    name:'FASTEST DELIVERY',
    image:Pic,
  };
  return (
    <div>
      <Hme {...dil} />
    </div>
  )
};

export default Delivery
