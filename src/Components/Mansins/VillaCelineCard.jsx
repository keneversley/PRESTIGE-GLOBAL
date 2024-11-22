

import React from 'react';
import './VillaCelineCard.css';

const VillaCelineCard = ({ celine }) => {
  return (
    <div className="villaceline-card">
      <img src={celine.image} alt={celine.name} className="villaceline-image" />
      <p>{celine.name}</p>
    </div>
  );
};

export default VillaCelineCard;



