import React, { useState, useEffect, useMemo } from 'react';
import { getWeatherData, getFiveDayForecast } from './services/weatherService';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ForecastCard from './components/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage'; // Import the ErrorMessage component
import './App.css'; // Ensure this path matches your file structure

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('New York');
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState(['New York', 'London', 'Paris', 'Tokyo']); // Example cities
  const [searchTerm, setSearchTerm] = useState('');
  const [daysToShow, setDaysToShow] = useState(6); // Updated state to manage 2, 4, 6 days

  useEffect(() => {
    if (!city) return;
    fetchData(city);
  }, [city]);

  const fetchData = async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      await Promise.all([fetchWeather(city), fetchForecast(city)]);
    } catch (error) {
      setError('Failed to load weather data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeather = async (city) => {
    try {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
    } catch (error) {
      setError('Failed to load weather data. Please check the city name and try again.');
    }
  };

  const fetchForecast = async (city) => {
    try {
      const forecastData = await getFiveDayForecast(city);
      const filteredForecast = filterDailyForecast(forecastData.list);
      setForecast(filteredForecast);
    } catch (error) {
      setError('Failed to load forecast data. Please check the city name and try again.');
    }
  };

  const filterDailyForecast = (forecastList) => {
    const dailyForecast = {};

    forecastList.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-US');
      if (!dailyForecast[forecastDate]) {
        dailyForecast[forecastDate] = forecast;
      }
    });

    return Object.values(dailyForecast);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(prev => !prev);
  };

  const convertTemperature = useMemo(
    () => (temp) => (isCelsius ? temp : (temp * 9) / 5 + 32).toFixed(2),
    [isCelsius]
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      setCity(searchTerm);
      setSearchTerm(''); // Clear search term after submission
    }
  };

  // Function to handle the last 2, 4, or 6 days forecast selection
  const handleDaysSelection = (days) => {
    setDaysToShow(days);
  };

  return (
    <div className="app-container">
      <Header />

      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />

      <Dropdown
        options={cities}
        onSelect={setCity}
      />

      {isLoading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {weather && !isLoading && !error && (
        <div className="weather-display">
          <WeatherCard
            city={weather.name}
            temperature={`${convertTemperature(weather.main.temp)}°`}
            condition={weather.weather[0].description}
            icon={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />
        </div>
      )}

      <div className="controls">
        <button
          className={`toggle-button ${!isCelsius ? 'active' : ''}`}
          onClick={toggleTemperatureUnit}
        >
          {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>

        {/* Buttons for selecting 2-day, 4-day, or 6-day forecast */}
        <button
          className={`forecast-button ${daysToShow === 2 ? 'active' : ''}`}
          onClick={() => handleDaysSelection(2)}
        >
          Last 2 Days
        </button>
        <button
          className={`forecast-button ${daysToShow === 4 ? 'active' : ''}`}
          onClick={() => handleDaysSelection(4)}
        >
          Last 4 Days
        </button>
        <button
          className={`forecast-button ${daysToShow === 6 ? 'active' : ''}`}
          onClick={() => handleDaysSelection(6)}
        >
          Last 6 Days
        </button>
      </div>

      <div className="forecast-container">
        {forecast.length > 0 && !isLoading && !error && (
          <div className="forecast-display">
            {forecast.slice(0, daysToShow).map((dayForecast, index) => (
              <ForecastCard
                key={index}
                day={new Date(dayForecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                highTemp={`${convertTemperature(dayForecast.main.temp_max)}°`}
                lowTemp={`${convertTemperature(dayForecast.main.temp_min)}°`}
                icon={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}.png`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
