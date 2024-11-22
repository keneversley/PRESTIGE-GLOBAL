
import React from 'react';
import './BentleyCard.css';

const BentleyCard = ({ bentley }) => {
  // Check if the required properties exist
  const hasImage = bentley.image;
  const hasName = bentley.name;

  return (
    <div className="kikicard-card">
      {bentley.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="bentleycard-video">
            <source src={bentley.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={bentley.image} alt={hasName || "Bentley Card"} className="bentleycard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default BentleyCard;