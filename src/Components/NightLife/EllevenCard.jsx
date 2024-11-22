import React from 'react';
import './EllevenCard.css';

const EllevenCard = ({ elleven }) => {
  // Check if the required properties exist
  const hasImage = elleven.image;
  const hasName = elleven.name;

  return (
    <div className="ellevencard-card">
      {elleven.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="ellevencard-video">
            <source src={elleven.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={elleven.image} alt={hasName || "elleven Card"} className="ellevenhcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default EllevenCard;