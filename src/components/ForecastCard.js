import React from 'react';
import PropTypes from 'prop-types';
import './ForecastCard.css'; // Import the CSS file for styling

const ForecastCard = ({ day, highTemp, lowTemp, icon }) => {
  return (
    <div className="forecast-card">
      <div className="forecast-day">{day}</div>
      <img src={icon} alt="weather icon" className="forecast-icon" />
      <div className="forecast-temps">
        <span className="high-temp">{highTemp}</span>
        <span className="low-temp">{lowTemp}</span>
      </div>
    </div>
  );
};

ForecastCard.propTypes = {
  day: PropTypes.string.isRequired,
  highTemp: PropTypes.string.isRequired,
  lowTemp: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastCard;