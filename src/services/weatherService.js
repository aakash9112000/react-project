import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const getFiveDayForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};
