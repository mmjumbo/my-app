import React, { useState } from "react";
import "./styles.css"; // Assuming your CSS is in src/styles.css

const WeatherApp = () => {
  const [city, setCity] = useState("Paris");
  const [weatherDetails, setWeatherDetails] = useState({
    temp: 24,
    description: "moderate rain",
    humidity: 87,
    wind: "7.2km/h",
  });

  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set the city and leave other details static
    setCity(searchCity);
  };

  return (
    <div className="weather-app">
      <header>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city" id="current-city">
              {city}
            </h1>
            <p className="current-details">
              {new Date().toLocaleDateString()}, {weatherDetails.description}{" "}
              <br />
              Humidity: <strong>{weatherDetails.humidity}%</strong>, Wind:{" "}
              <strong>{weatherDetails.wind}</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span className="current-temperature-value">
              <span id="current-temp">{weatherDetails.temp}</span>
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by Margaret Jumbo
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            on GitHub
          </a>{" "}
          and{" "}
          <a href="#" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
};

export default function Weather() {
  
}
