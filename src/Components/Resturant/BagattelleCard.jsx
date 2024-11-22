import React from 'react';
import './BagattelleCard.css';

const BagattelleCard = ({ baga }) => {
  // Check if the required properties exist
  const hasImage = baga.image;
  const hasName = baga.name;

  return (
    <div className="bagacard-card">
      {baga.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="bagacard-video">
            <source src={baga.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={baga.image} alt={hasName || "Bagattelle Card"} className="bagacard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default BagattelleCard;

