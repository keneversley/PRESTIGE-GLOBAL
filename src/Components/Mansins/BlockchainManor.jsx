

import React from 'react';
import './BlockchainManor.css';

const BlockchainManor = ({ block }) => {
  return (
    <div className="blockchain-card">
      <img src={block.image} alt={block.name} className="blockchain-image" />
      <p>{block.name}</p>
    </div>
  );
};

export default BlockchainManor;
