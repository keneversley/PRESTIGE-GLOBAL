
import React from 'react';
import './SunSeekerCard.css';

const SunSeekerCard = ({ sunseeker }) => {
  // Check if the required properties exist
  const hasImage = sunseeker.image;
  const hasName = sunseeker.name;

  return (
    <div className="sunseekercard-card">
      {sunseeker.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="sunseekercard-video">
            <source src={sunseeker.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={sunseeker.image} alt={hasName || "SunSeeker Card"} className="sunseekercard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default SunSeekerCard;