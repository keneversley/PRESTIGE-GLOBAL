
import React from 'react';
import './Pershing92Card.css';

const Pershing92Card = ({ pershing92 }) => {
  // Check if the required properties exist
  const hasImage = pershing92.image;
  const hasName = pershing92.name;

  return (
    <div className="pershing92card-card">
      {pershing92.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="pershing92card-video">
            <source src={pershing92.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={pershing92.image} alt={hasName || "Pershing92 Card"} className="pershing92card-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Pershing92Card;