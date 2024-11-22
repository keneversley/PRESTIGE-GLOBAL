import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const DatePickerComponent = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = date => setStartDate(date);
  const handleEndDateChange = date => setEndDate(date);
  const handleEmailChange = e => setEmail(e.target.value);

  const handleSubmit = () => {
    if (!startDate || !endDate || !email) {
      alert('Please select both start and end dates and enter your email.');
      return;
    }

    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();

    console.log(`Start Date: ${formattedStartDate}`);
    console.log(`End Date: ${formattedEndDate}`);
    console.log(`Email: ${email}`);

    alert(`Date range selected from ${formattedStartDate} to ${formattedEndDate}`);
  };

  return (
    <div className="date-picker-container">
      <h3>Select a Date Range:</h3>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        dateFormat="MMMM d, yyyy"
        placeholderText="Select start date"
        className="date-picker-input"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsEnd
        minDate={startDate} // Prevent selecting an end date before the start date
        dateFormat="MMMM d, yyyy"
        placeholderText="Select end date"
        className="date-picker-input"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="email-input"
      />
      <button onClick={handleSubmit} className="submit-btn">
        Request Date
      </button>
    </div>
  );
};

export default DatePickerComponent;


