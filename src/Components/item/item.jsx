import './item.css'
import React from 'react';

const Item = ({ id, name, image }) => {
  return (
    <div className='image-container'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Item;

