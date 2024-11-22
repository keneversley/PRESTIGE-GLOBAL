// import React, { useState } from 'react';
// import './VillaLuna.css';

// const VillaLuna = ({ luna }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`villaluna-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
//       <div className="villaluna-image-container">
//         <img src={luna.image} alt={luna.name} className="villaluna-image" />
//         <div className="villaluna-title">{luna.name}</div>
//       </div>
//       <p>{luna.category}</p>
//     </div>
//   );
// };

// export default VillaLuna;

import React from 'react';
import './VillaLuna.css';

const VillaLuna = ({ luna }) => {
  return (
    <div className="villaluna-card">
      <img src={luna.image} alt={luna.name} className="villaluna-image" />
      <p>{luna.name}</p>
    </div>
  );
};

export default VillaLuna;

