# React Weather App
## Live Link
react-project-omega-eight.vercel.app
## Description
This is a weather application built using React that allows users to check the current weather and weather forecast for various cities. The application utilizes the OpenWeatherMap API to fetch weather data and the GeoDB Cities API to retrieve city names.

## Features
- **Current Weather:** Displays the current weather conditions for the selected city.
- **Detailed Weather Information:** Provides a detailed description of current weather conditions such as pressure, humidity, and wind speed.
- **Weather Forecast:** Shows the weather forecast for 3 days, 5 days, and 7 days, including temperature highs and lows, weather descriptions, and icons representing weather conditions.

  
**Weather Data Display**:

Main page shows current weather for a default city (New York).
Features reusable components for dynamic city names, temperatures, and weather icons.
Modular UI for easy maintenance and scalability.
City Search Functionality:

**Search and view weather for any city**.
Real-time data from OpenWeatherMap API.
Custom input component with dropdown modal for city selection.
Handles errors gracefully with user-friendly messages.
Five-Day Weather Forecast:

**Displays a 5-day forecast below the current weather**.
Shows day of the week, high and low temperatures, and weather icons.
Reusable ForecastCard component for consistent design.
Temperature Unit Conversion:

**Toggle between Celsius and Fahrenheit**.
Manual conversion logic for accurate updates.
React state management for real-time temperature updates.
Responsive UI & Styling:

Modern, responsive design with CSS and React.js styling techniques.
