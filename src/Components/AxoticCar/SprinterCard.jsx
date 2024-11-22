import React from 'react';
import './SprinterCard.css';

const SprinterCard = ({ sprinter }) => {
  const hasImage = sprinter.image;
  const hasName = sprinter.name;

  return (
    <div className="sprinter-card">
      {sprinter.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="sprinter-image">
            <source src={sprinter.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={sprinter.image} alt={hasName || "Sprinter Card"} className="sprinter-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default SprinterCard;
