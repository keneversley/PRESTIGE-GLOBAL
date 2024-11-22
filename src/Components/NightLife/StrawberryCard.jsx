import React from 'react';
import './StrawberryCard.css';

const StrawberryCard = ({ strawberry }) => {
  // Check if the required properties exist
  const hasImage = strawberry.image;
  const hasName = strawberry.name;

  return (
    <div className="strawberrycard-card">
      {strawberry.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="strawberrycard-video">
            <source src={strawberry.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={strawberry.image} alt={hasName || "Strawberry Card"} className="strawberrycard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default StrawberryCard;

