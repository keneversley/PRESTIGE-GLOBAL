
import React from 'react';
import HeroImage from '../Shared/HeroImage';
import MansionImg from '../Assets/banner_mansion.jpg';
import villaceline from '../Assets/7_VillaCeline';
import VillaCelineCard from './VillaCelineCard';
import blockchain from '../Assets/7_BlockchainManor';
import BlockchainManor from './BlockchainManor';
import oasis from '../Assets/4_OasisRetreat';
import OasisCard from './OasisCard';
import luna from '../Assets/5_VillaLuna';
import VillaLuna from './VillaLuna';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Adjust path as necessary
import VillaMira from './VillaMira';
import villaMira from '../Assets/6_VillaMira';
import './Mansions.css'; // Adjust path as
import penthouse from '../Assets/2_PenthousePoblado';
import PenthousePoblado from './PenthousePoblado';
import granada from '../Assets/10_VillaGranada';
import VillaGranada from './VillaGranada';
import onehotellogo from "../Assets/onehotellogo.jpg";
import onehotel from "../Assets/1_Hotel";
import OnerHotelCard from "./OneHotelCard";



const Mansions = () => {
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
      <HeroImage Image={MansionImg} className="hero-image" />

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Celine</p>
          <h1 className="center-bold">7 bd 6.5 Bth 4,500 sq feet in Brickell</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Villa Celine" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {villaceline.map((celine) => (
              <VillaCelineCard key={celine.id} celine={celine} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Blockchain Manor</p>
          <h1 className="blockchain-bold">6 bd 4 Bth 4,000 sq feet  with Movie theatre in Miami</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Blockchain Manor" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {blockchain.map((block) => (
              <BlockchainManor key={block.id} block={block} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Oasis</p>
          <h1 className="center-bold">4 bd 2 Bath 3,100 sq feet in South Miami</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Oasis" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {oasis.map((oasis) => (
              <OasisCard key={oasis.id} oasis={oasis} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Luna</p>
          <h1 className="center-bold">5 bd 4 Bath 3,850 sq feet in Sunny Isles</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Villa Luna" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {luna.map((luna) => (
              <VillaLuna key={luna.id} luna={luna} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
  <div className="text-container">
    <p className="bold-underline">Villa Mira</p>
    <h1 className="center-bold">6 bd 4.5 Bath 4,600 sq feet in Palm Island</h1>
    <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Villa Mira" className="reserve-button">
            Reserve
          </a>
        </div>
  </div>
  <div className="images-container">
    <Slider {...settings}>
      {villaMira.map((mira) => (
        <VillaMira key={mira.id} mira={mira} />
      ))}
    </Slider>
  </div>
</div>

<div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Penthouse Poblado</p>
          <h1 className="center-bold">2 bedrooms 4 bathroons in Columbia</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Penthouse Pablado" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {penthouse.map((pent) => (
              <PenthousePoblado key={pent.id} pent={pent} />
            ))}
          </Slider>
        </div>
      </div>


      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Granada</p>
          <h1 className="center-bold">10 bedrooms 10 bathrooms in Coral Gables </h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Villa Granada" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {granada.map((granada) => (
              <VillaGranada key={granada.id} granada={granada} />
            ))}
          </Slider>
        </div>
      </div>


      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">1 Hotel Ocean View </p>
          <h1 className="center-bold">4guests 1bedroom 2beds 1bath in Miami Beach </h1>
          <img src={onehotellogo} alt="" className="onehotel-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for One hotel ocean view" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {onehotel.map((onehotel) => (
              <OnerHotelCard key={onehotel.id} onehotel={onehotel} />
            ))}
          </Slider>
        </div>
      </div>

    </div>
  );
};

export default Mansions;
