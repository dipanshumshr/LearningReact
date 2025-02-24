import React, { useState } from "react";
import './Weather.css';
import Header from "./Header";
import Zoom from '@mui/material/Zoom';


const api = {
  key: "269893eb328c016ba944a042bd43bf58",
  base: "https://api.openweathermap.org/data/2.5/weather?",
};

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  function handleWeather() {
    fetch(`${api.base}q=${location}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
    setLocation("");
  }

  const search = (event) => {
    if (event.key === "Enter") {
      handleWeather();
    }
  };

  const dateBuilder = (d) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const currentYear = d.getFullYear();
    const currentDate = d.getDate();
    const currentMonth = month[d.getMonth()];
    const currentDay = day[d.getDay() - 1];

    return `${currentDay} ${currentDate} ${currentMonth} ${currentYear}`;
  };

  return (
    <>
      <main>
        <Header/>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            placeholder="search..."
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={search}
            value={location}
          ></input>
          <button className="weather-button" onClick={handleWeather}>
            Get weather
          </button>
        </div>
        {weather && (
        
             <div className="weatherBox">
            <div className="Location name">
              <p> CityName : {weather.name} </p>
              <p> CountryName : {weather.sys.country} </p>
            </div>
            <div className="date">Date : {dateBuilder(new Date())}</div>
            <div className="tempBox">
              <div className="tempareture">
                <p> Tempareture : {Math.round(weather.main.temp)}°C </p>
                <p> Feels Like : {Math.round(weather.main.feels_like)}</p>
              </div>
              <div className="weather">
                <p>Weather : {weather.weather[0].main}</p>
              </div>
            </div>
          </div> 
        )}
      </main>
    </>
  );
}
export default Weather;
