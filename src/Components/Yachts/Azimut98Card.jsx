
import React from 'react';
import './Azimut98Card.css';

const Azimut98Card = ({ azimut98 }) => {
  // Check if the required properties exist
  const hasImage = azimut98.image;
  const hasName = azimut98.name;

  return (
    <div className="azimut98card-card">
      {azimut98.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="azimut98card-video">
            <source src={azimut98.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={azimut98.image} alt={hasName || "Azimut98 Card"} className="azimut98card-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Azimut98Card;