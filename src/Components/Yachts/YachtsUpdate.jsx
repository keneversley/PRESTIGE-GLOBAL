import React from "react";
import HeroImage from "../Shared/HeroImage";
import YachtsImg from "../Assets/banner_yachts.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Adjust path as necessary
import azimut from "../Assets/90_Azimut";
import AzimutCard from "./AzimutCard";
import azimutlogo from "../Assets/azimutlogo.jpg";
import leopardlogo from "../Assets/leopardlogo.jpg";
import leopard from "../Assets/88_LeopardChurri";
import LeopardCard from "./LeopardCard";
import azimut98 from "../Assets/98_AzimutRound";
import Azimut98Card from "./Azimut98Card";
import sunseeker from "../Assets/102_SunSeeker";
import SunSeekerCard from "./SunSeekerCard";
import sunseekerlogo from "../Assets/sunseekerlogo.png";
import nirvinalogo from "../Assets/nirvinalogo.png";
import NirvinaCard from "./NirvinaCard"
import nirvina from "../Assets/120_Nirvina";
import rodmanlogo from "../Assets/rodmanlogo.png";
import RodmanCard from "./RodmanCard";
import rodman from "../Assets/110_Rodman";
import leopard105 from "../Assets/105_Leopard";
import Leopard105Card from "./Leopard_105Card";
import PershingCard from "./PershingCard";
import pershing from "../Assets/70_Pershing"
import pershinglogo from "../Assets/pershinglogo.png";
import betsy from "../Assets/Betsy";
import betsylogo from "../Assets/betsylogo.png";
import BetsyCard from "./BetsyCard";
import azimut60 from "../Assets/60_Azimut";
import Azimut60Card from "./Azimut60Card";
import pershing92 from "../Assets/92_Pershing";
import Pershing92Card from "./Persching92Card";
import azimut103 from "../Assets/103_Azimut";
import Azimut103Card from "./Azimut103Card";




const YachtsUpdate = () => {

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
      <HeroImage Image={YachtsImg} className="hero-image"></HeroImage>


      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">90ft Azimut Yacht</p>
          <img src={azimutlogo} alt="" className="azimut-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 90FT Azimut Yacht" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {azimut.map((azimutItem) => (
              <AzimutCard key={azimutItem.id} azimut={azimutItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">88FT Leopard "Churri" Yacht</p>
          <img src={leopardlogo} alt="" className="leopard-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 88ft Leopard Churri Yacht" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {leopard.map((leopardItem) => (
              <LeopardCard key={leopardItem.id} leopard={leopardItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">98ft Azimut "The Round" Yacht</p>
          <img src={azimutlogo} alt="" className="azimut98-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 98FT Azimut The Round Yacht" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {azimut98.map((azimut98Item) => (
              <Azimut98Card key={azimut98Item.id} azimut98={azimut98Item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">102FT SunSeeker Yacht</p>
          <img src={sunseekerlogo} alt="" className="sunseeker-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 102 Sunseeker Yacht" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {sunseeker.map((sunseekerItem) => (
              <SunSeekerCard key={sunseekerItem.id} sunseeker={sunseekerItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">120FT Nirvina Yacht</p>
          <img src={nirvinalogo} alt="" className="nirvina-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 120FT Nirvina Yacth" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {nirvina.map((nirvinaItem) => (
              <NirvinaCard key={nirvinaItem.id} nirvina={nirvinaItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">110FT Rodman Yacht</p>
          <img src={rodmanlogo} alt="" className="nirvina-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 110FT Rodman Yacth" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {rodman.map((rodmanItem) => (
              <RodmanCard key={rodmanItem.id} rodman={rodmanItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">105FT Leopard Yacht</p>
          <img src={leopardlogo} alt="" className="nirvina-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 110FT Rodman Yacth" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {leopard105.map((leopard105Item) => (
              <Leopard105Card key={leopard105Item.id} leopard105={leopard105Item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">70ft Pershing 7X Yacht</p>
          <img src={pershinglogo} alt="" className="pershing-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 110FT Rodman Yacth" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {pershing.map((pershingItem) => (
              <PershingCard key={pershingItem.id} pershing={pershingItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Betsy By Spencer  Yachts</p>
          <img src={betsylogo} alt="" className="pershing-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Betsy Yacht" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {betsy.map((betsyItem) => (
              <BetsyCard key={betsyItem.id} betsy={betsyItem} />
            ))}
          </Slider>
        </div>
      </div>

     
      <div className="section-container">
  <div className="text-container">
    <p className="bold-underline">60ft Azimut Yacht</p>
    <img src={azimutlogo} alt="" className="azimut60-header-image" />
    <h1 className="center-bold">Miami Florida</h1>
    <div className="reserve-container">
      <a href="mailto:reservation@example.com?subject=Reservation Request for 60ft Azimut Yacht" className="reserve-button">
        Reserve
      </a>
    </div>
  </div>
  <div className="images-container">
    <Slider {...settings}>
      {azimut60.map((azimut60Item) => (
        <Azimut60Card key={azimut60Item.id} azimut60={azimut60Item} />
      ))}
    </Slider>
  </div>
</div>

<div className="section-container">
        <div className="text-container">
          <p className="bold-underline">92ft Pershing Yacht</p>
          <img src={pershinglogo} alt="" className="pershing92-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for 92ft Pershing" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {pershing92.map((pershing92Item) => (
              <Pershing92Card key={pershing92Item.id} pershing92={pershing92Item} />
            ))}
          </Slider>
        </div>
      </div>


      <div className="section-container">
  <div className="text-container">
    <p className="bold-underline">103ft Azimut Yacht</p>
    <img src={azimutlogo} alt="" className="azimut103-header-image" />
    <h1 className="center-bold">Miami Florida</h1>
    <div className="reserve-container">
      <a href="mailto:reservation@example.com?subject=Reservation Request for 103ft Azimut Yacht" className="reserve-button">
        Reserve
      </a>
    </div>
  </div>
  <div className="images-container">
    <Slider {...settings}>
      {azimut103.map((azimut103Item) => (
        <Azimut103Card key={azimut103Item.id} azimut103={azimut103Item} />
      ))}
    </Slider>
  </div>
</div>
      


      
    </div>
    
  );
};

export default YachtsUpdate;

