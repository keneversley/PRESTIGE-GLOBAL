
import React from 'react';
import './AzimutCard.css';

const Azimutcard = ({ azimut }) => {
  // Check if the required properties exist
  const hasImage = azimut.image;
  const hasName = azimut.name;

  return (
    <div className="azimutcard-card">
      {azimut.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="azimutcard-video">
            <source src={azimut.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={azimut.image} alt={hasName || "Azimut Card"} className="azimutcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Azimutcard;