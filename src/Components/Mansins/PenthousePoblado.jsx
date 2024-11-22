

import React from 'react';
import './PenthousePoblado.css';

const PenthousePoblado = ({ pent }) => {
  return (
    <div className="penthouse-card">
      <img src={pent.image} alt={pent.name} className="penthouse-image" />
      <p>{pent.name}</p>
    </div>
  );
};

export default PenthousePoblado;
