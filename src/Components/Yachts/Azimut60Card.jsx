
import React from 'react';
import './Azimut60Card.css';

const Azimut60Card = ({ azimut60 }) => {
  // Check if the required properties exist
  const hasImage = azimut60.image;
  const hasName = azimut60.name;

  return (
    <div className="azimut98card-card">
      {azimut60.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="azimut60card-video">
            <source src={azimut60.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={azimut60.image} alt={hasName || "Azimut60 Card"} className="azimut60card-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Azimut60Card;