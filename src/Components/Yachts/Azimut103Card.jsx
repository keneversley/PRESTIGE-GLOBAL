
import React from 'react';
import './Azimut103Card.css';

const Azimut103Card = ({ azimut103 }) => {
  // Check if the required properties exist
  const hasImage = azimut103.image;
  const hasName = azimut103.name;

  return (
    <div className="azimut103card-card">
      {azimut103.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="azimut103card-video">
            <source src={azimut103.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={azimut103.image} alt={hasName || "Azimut103 Card"} className="azimut103card-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Azimut103Card;