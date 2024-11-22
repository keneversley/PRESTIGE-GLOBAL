

import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero_image.png';


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div>
          <p>Villas</p>
          <p>Mansions</p>
          <p>& Penthouses</p>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt="" />
      </div>
      
    </div>
  );
}

export default Hero;
