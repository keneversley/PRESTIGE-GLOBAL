
import React from 'react';
import './NirvinaCard.css';

const NirvinaCard = ({ nirvina }) => {
  // Check if the required properties exist
  const hasImage = nirvina.image;
  const hasName = nirvina.name;

  return (
    <div className="leopardcard-card">
      {nirvina.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="nirvinacard-video">
            <source src={nirvina.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={nirvina.image} alt={hasName || "Nirvina Card"} className="nirvinacard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default NirvinaCard;