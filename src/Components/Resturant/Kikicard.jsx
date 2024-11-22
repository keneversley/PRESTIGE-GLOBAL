
import React from 'react';
import './Kikicard.css';

const Kikicard = ({ kiki }) => {
  // Check if the required properties exist
  const hasImage = kiki.image;
  const hasName = kiki.name;

  return (
    <div className="kikicard-card">
      {kiki.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="kikicard-video">
            <source src={kiki.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={kiki.image} alt={hasName || "Kiki Card"} className="kikicard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Kikicard;


