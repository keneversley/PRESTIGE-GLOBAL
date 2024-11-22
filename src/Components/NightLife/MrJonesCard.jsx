import React from 'react';
import './MrJonesCard.css';

const MrJonesCard = ({ mrjones }) => {
  // Check if the required properties exist
  const hasImage = mrjones.image;
  const hasName = mrjones.name;

  return (
    <div className="mrjonescard-card">
      {mrjones.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="mrjonescard-video">
            <source src={mrjones.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={mrjones.image} alt={hasName || "MrJones Card"} className="mrjonescard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default MrJonesCard;