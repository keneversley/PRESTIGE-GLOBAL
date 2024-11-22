import React from 'react';
import './VillaMira.css';

const VillaMira = ({ mira }) => {
  return (
    <div className="villamira-card">
      <img src={mira.image} alt={mira.name} className="villamira-image" />
      <p>{mira.name}</p>
    </div>
  );
};

export default VillaMira;

