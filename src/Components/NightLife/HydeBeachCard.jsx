import React from 'react';
import './HydeBeachCard.css';

const HydeBeachCard = ({ hydebeach }) => {
  // Check if the required properties exist
  const hasImage = hydebeach.image;
  const hasName = hydebeach.name;

  return (
    <div className="hydebeachcard-card">
      {hydebeach.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="hydebeachcard-video">
            <source src={hydebeach.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={hydebeach.image} alt={hasName || "HydeBeach Card"} className="hydebeachcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default HydeBeachCard;