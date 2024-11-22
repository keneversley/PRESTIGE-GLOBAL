import React from 'react';
import './VendomeCard.css';

const VendomeCard = ({ vendome }) => {
  // Check if the required properties exist
  const hasImage = vendome.image;
  const hasName = vendome.name;

  return (
    <div className="vendomecard-card">
      {vendome.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="vendomecard-video">
            <source src={vendome.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={vendome.image} alt={hasName || "Vendome Card"} className="vendomecard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default VendomeCard;

