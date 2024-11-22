import React from 'react';
import './LivCard.css';

const LivCard = ({ liv }) => {
  // Check if the required properties exist
  const hasImage = liv.image;
  const hasName = liv.name;

  return (
    <div className="livcard-card">
      {liv.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="livcard-video">
            <source src={liv.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={liv.image} alt={hasName || "Liv Card"} className="livcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default LivCard;