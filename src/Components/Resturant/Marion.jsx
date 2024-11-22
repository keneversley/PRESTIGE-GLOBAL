import React from 'react';
import './Marion.css';

const Marion = ({ marion}) => {
  return (
    <div className="oasis-card">
      <img src={marion.image} alt={marion.name} className="marion-image" />
      <p>{marion.name}</p>
      
    </div>
  );
};

export default Marion;