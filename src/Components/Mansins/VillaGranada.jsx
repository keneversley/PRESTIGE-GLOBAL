import React from 'react';
import './VillaGranada.css';

const VillaGranada = ({ granada }) => {
  return (
    <div className="granada-card">
      <img src={granada.image} alt={granada.name} className="granada-image" />
      <p>{granada.name}</p>
    </div>
  );
};

export default VillaGranada ;