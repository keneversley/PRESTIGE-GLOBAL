
import React from 'react';
import './GwagonCard.css';

const GwagonCard = ({ gwagon }) => {
  // Check if the required properties exist
  const hasImage = gwagon.image;
  const hasName = gwagon.name;

  return (
    <div className="gwagon-card">
      {gwagon.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="gwagoncard-video">
            <source src={gwagon.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={gwagon.image} alt={hasName || "Gwagon Card"} className="gwagoncard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default GwagonCard;