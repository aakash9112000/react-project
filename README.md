React Weather App
Description:
This is a weather applications built using React that allows users to check the current weather and weather forecast for various cities. The application utilizes the OpenWeatherMap API to fetch weather data and the GeoDB Cities API to retrieve citynames. 

Features:
Current Weather: Displays the current weather conditions for the selected city.

Detailed Weather Information: Provides a detailed description of current weather conditions such as pressure, humidity and wind speed.

Weather Forecast: Shows the weather forecast for 3 days, 5 days and 7 days, which allows users to plan ahead. The forecast includes temperature highs and lows, weather descriptions, and icons representing weather conditions.


site : https://react-project-omega-eight.vercel.app/
Installation:




Weather App Overview: Successfully Implemented Features
1. Weather Data Display
Developed a main weather display page that shows the current weather for a default city (New York).
Built and structured reusable components for:
Displaying the city name dynamically.
Showing the current temperature.
Displaying the weather condition (e.g., sunny, rainy) along with an appropriate icon.
Prioritized maintainability by breaking down the UI into modular components, ensuring future scalability.
2. City Search Functionality
Implemented a city search feature allowing users to search for and view weather data for any city.
Integrated a real-time data feed from the OpenWeatherMap API.
Handled potential issues such as "city not found" and network errors gracefully by providing user-friendly error messages.
Built a custom input component from scratch with a dropdown modal for city selection. This feature lists cities as the user types, and was developed without the use of third-party libraries, focusing on custom functionality.
3. Five-Day Weather Forecast
Added a 5-day weather forecast below the current weather display, providing users with an overview of upcoming conditions.
For each day in the forecast, displayed:
The day of the week.
High and low temperatures.
A corresponding weather icon.
Created a reusable ForecastCard component for each day, ensuring consistency and ease of future updates.
4. Temperature Unit Conversion
Integrated a toggle button that allows users to switch seamlessly between Celsius and Fahrenheit.
Manually implemented the temperature conversion logic to avoid dependencies on external libraries.
Utilized React state management to dynamically update the displayed temperatures when the unit is changed, ensuring accurate and immediate feedback.
5. Responsive UI & Styling
Designed and implemented a visually appealing, responsive interface using modern CSS and React.js styling techniques.

