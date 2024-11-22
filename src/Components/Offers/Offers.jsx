import React from 'react';
import './Offers.css';
import Mansion_chain from '../Assets/Mansion_chain.jpg';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';

export const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <DatePickerComponent />
      </div>
      <div className='offers-right'>
        <img src={Mansion_chain} alt="" />
      </div>
    </div>
  );
}

export default Offers;

