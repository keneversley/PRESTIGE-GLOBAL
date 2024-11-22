// import React from "react";
// import "./HeroImage.css";

// const HeroImage = ({ Image }) => {
//   return (
//     <div className="min-h-screen max-w-6xl mx-auto h-[300px]  my-10">
//       <img
//         className="w-full mx-auto mb-8 h-full object-cover"
//         src={Image}
//         alt=""
//       />
//     </div>
//   );
// };

// export default HeroImage;

import React from "react";
import "./HeroImage.css";

const HeroImage = ({ Image }) => {
  return (
    <div className="hero-image-container">
      <img
        className="hero-image"
        src={Image}
        alt=""
      />
    </div>
  );
};

export default HeroImage;

