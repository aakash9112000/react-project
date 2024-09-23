React Weather App
Description:
This is a weather application built using React that allows users to check the current weather and weather forecast for various cities. The app integrates the OpenWeatherMap API to fetch real-time weather data and the GeoDB Cities API to retrieve city names, providing users with accurate and up-to-date information.

Features:
Current Weather: Displays the current weather conditions for the selected city, including temperature and weather status.
Detailed Weather Information: Offers a comprehensive view of current conditions, including pressure, humidity, and wind speed.
Weather Forecast: Provides forecasts for 3 days, 5 days, and 7 days, helping users plan ahead. The forecast includes:
Temperature highs and lows
Weather descriptions
Icons representing the weather conditions
Live Site:
Check out the live application here: Weather App

Weather App Overview
1. Weather Data Display
Developed a main weather display page that shows the current weather for a default city (e.g., New York).
Built and structured reusable components for:
Dynamically displaying the city name.
Showing the current temperature.
Displaying the weather condition (e.g., sunny, rainy) along with an appropriate icon.
Focused on maintainability by breaking the UI into modular, reusable components, ensuring scalability for future updates.
2. City Search Functionality
Implemented a city search feature that allows users to search for and view weather data for any city.
Integrated real-time data from the OpenWeatherMap API.
Gracefully handled potential issues such as "city not found" and network errors, providing user-friendly error messages.
Built a custom input component from scratch featuring a dropdown modal for city selection, listing cities as the user types. The feature was developed without third-party libraries, showcasing custom functionality.
3. Five-Day Weather Forecast
Added a 5-day weather forecast section below the current weather display to give users an overview of upcoming weather conditions.
For each day, displayed:
The day of the week.
High and low temperatures.
A corresponding weather icon.
Created a reusable ForecastCard component for each day, ensuring a consistent design and easier future updates.
4. Temperature Unit Conversion
Integrated a toggle button that allows users to seamlessly switch between Celsius and Fahrenheit.
Manually implemented the temperature conversion logic to avoid using third-party libraries.
Used React state management to dynamically update the displayed temperatures when switching units, ensuring real-time, accurate feedback.
5. Responsive UI & Styling
Designed and implemented a visually appealing, responsive interface using modern CSS and React.js styling techniques.
Ensured the application is fully responsive, adap
