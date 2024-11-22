
import React from 'react';
import './RodmanCard.css';

const RodmanCard = ({ rodman }) => {
  // Check if the required properties exist
  const hasImage = rodman.image;
  const hasName = rodman.name;

  return (
    <div className="rodmancard-card">
      {rodman.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="sunseekercard-video">
            <source src={rodman.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={rodman.image} alt={hasName || "Rodman Card"} className="rodmancard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default RodmanCard;