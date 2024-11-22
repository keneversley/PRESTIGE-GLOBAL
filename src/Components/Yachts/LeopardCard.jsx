
import React from 'react';
import './LeopardCard.css';

const LeopardCard = ({ leopard }) => {
  // Check if the required properties exist
  const hasImage = leopard.image;
  const hasName = leopard.name;

  return (
    <div className="leopardcard-card">
      {leopard.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="leopardcard-video">
            <source src={leopard.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={leopard.image} alt={hasName || "Leopard Card"} className="leopardcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default LeopardCard;