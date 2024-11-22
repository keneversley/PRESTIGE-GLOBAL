
import React from 'react';
import './OneHotelCard.css';

const OneHotelCard = ({ onehotel }) => {
  // Check if the required properties exist
  const hasImage = onehotel.image;
  const hasName = onehotel.name;

  return (
    <div className="onehotelcard-card">
      {onehotel.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="azimut103card-video">
            <source src={onehotel.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={onehotel.image} alt={hasName || "OneHotel Card"} className="onehotelcard-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default OneHotelCard;