
import React from 'react';
import './Leopard_105Card.css';

const Leopard105Card = ({ leopard105 }) => {
  // Check if the required properties exist
  const hasImage = leopard105.image;
  const hasName = leopard105.name;

  return (
    <div className="leopard105card-card">
      {leopard105.isVideo ? (
        hasImage ? (
          <video controls autoPlay muted className="leopard105card-video">
            <source src={leopard105.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not available</p>
        )
      ) : (
        hasImage ? (
          <img src={leopard105.image} alt={hasName || "Leopard105 Card"} className="leopard105card-image" />
        ) : (
          <p>Image not available</p>
        )
      )}
      <p>{hasName || "No Name"}</p>
    </div>
  );
};

export default Leopard105Card;