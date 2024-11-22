import React from "react";
import HeroImage from "../Shared/HeroImage";
import AxoticImg from "../Assets/banner_exotic.webp";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Adjust path as necessary
import bentley from "../Assets/Bentley";
import BentleyCard from "./BentleyCard";
import bentleylogo from "../Assets/bentleylogo.png";
import sprinterlogo from "../Assets/sprinterlogo.jpg"; 
import sprinter from "../Assets/Sprinter";
import SprinterCard from "./SprinterCard";
import rangelogo from "../Assets/rangelogo.png";
import range from "../Assets/RangeRover";
import RangeCard from "./RangeCard";
import gwagonlogo from "../Assets/gwagonlogo.png";
import gwagon from "../Assets/Gwagon";
import GwagonCard from "./GwagonCard";

const AxoticCars = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <HeroImage Image={AxoticImg}></HeroImage>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Bentley</p>
          <img src={bentleylogo} alt="" className="bentley-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Bentley Car" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {bentley.map((bentleyItem) => (
              <BentleyCard key={bentleyItem.id} bentley={bentleyItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Mercedes Sprinter</p>
          <img src={sprinterlogo} alt="" className="sprinter-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Sprinter Van" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {sprinter.map((sprinterItem) => (
              <SprinterCard key={sprinterItem.id} sprinter={sprinterItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Range Rover Sport</p>
          <img src={rangelogo} alt="" className="range-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Range Rover Sport" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {range.map((rangeItem) => (
              <RangeCard key={rangeItem.id} range={rangeItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Mercedes G Wagon</p>
          <img src={gwagonlogo} alt="" className="range-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Mercedes Gwagon" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {gwagon.map((gwagonItem) => (
              <GwagonCard key={gwagonItem.id} gwagon={gwagonItem} />
            ))}
          </Slider>
        </div>
      </div>



    </div>
  );
};

export default AxoticCars;
