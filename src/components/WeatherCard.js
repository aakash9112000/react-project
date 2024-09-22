// src/components/WeatherCard.js

import React from 'react';
import './WeatherCard.css'; // Import the CSS file

const WeatherCard = ({ city, temperature, condition, icon }) => (
  <div className="weather-card">
    <h2>{city}</h2>
    <h3>{temperature}°</h3>
    <p>{condition}</p>
    <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Weather icon" />
  </div>
);

export default WeatherCard;
