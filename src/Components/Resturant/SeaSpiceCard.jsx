
import React from 'react';
import './SeaSpiceCard.css';

const SeaSpiceCard = ({ seaspice }) => {
  // Check if the required properties exist
  const hasImage = seaspice.image;
  const hasName = seaspice.name;

  return (
    <div className="seaspicecard-card">
      {seaspice.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="seaspicecard-video">
            <source src={seaspice.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={seaspice.image} alt={hasName || "SeaSpice Card"} className="seaspicecard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default SeaSpiceCard;


