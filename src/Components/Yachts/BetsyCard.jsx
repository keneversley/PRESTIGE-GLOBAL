
import React from 'react';
import './BetsyCard.css';

const BetsyCard = ({ betsy }) => {
  // Check if the required properties exist
  const hasImage = betsy.image;
  const hasName = betsy.name;

  return (
    <div className="betsycard-card">
      {betsy.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="betsycard-video">
            <source src={betsy.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={betsy.image} alt={hasName || "Betsy Card"} className="betsycard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default BetsyCard;