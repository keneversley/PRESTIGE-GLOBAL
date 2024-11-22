
import React from 'react';
import './PershingCard.css';

const PershingCard = ({ pershing }) => {
  // Check if the required properties exist
  const hasImage = pershing.image;
  const hasName = pershing.name;

  return (
    <div className="leopardcard-card">
      {pershing.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="pershingcard-video">
            <source src={pershing.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={pershing.image} alt={hasName || "Pershing Card"} className="pershingcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default PershingCard;