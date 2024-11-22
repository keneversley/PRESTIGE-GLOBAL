import React from 'react';
import './RangeCard.css';

const RangeCard = ({ range }) => {
  const hasImage = range.image;
  const hasName = range.name;

  return (
    <div className="range-card">
      {range.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="range-image">
            <source src={range.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={range.image} alt={hasName || "Range Card"} className="range-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default RangeCard;