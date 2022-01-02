import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ countryName }) => {
  const api_key = `${process.env.REACT_APP_API_KEY}`;
  console.log(api_key)

  const [cityWeather, setCityWeather] = useState({});

  let compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];


  useEffect(() => {
    console.log("effect");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName.capital[0]}&appid=${api_key}`
      )
      .then((response) => {
        console.log("promise fulfilled");
        console.log(countryName.capital[0])
        

        setCityWeather(response.data);
        console.log(cityWeather)
      });
  }, []);
  return (
    <div>
      <div>capital {countryName.capital[0]}</div>
      <div>population {countryName.population}</div>
      <h2>languages</h2>

      <ul>
        {" "}
        {Object.values(countryName.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={countryName.flags.png} />

      <h2>Weather in {countryName.capital[0]}</h2>
      <p>
        <b>temperature:</b> {cityWeather.main && Math.round(cityWeather.main.temp - 273.15)} Celsius
      </p>
      <img src={cityWeather.weather && `http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}/>
      <p>
        <b>wind:</b> {cityWeather.wind && Math.round(cityWeather.wind.speed * 2.23694)} mph direction {cityWeather.wind && compassSector[(cityWeather.wind.deg / 22.5).toFixed(0)]}
      </p>
    </div>
  );
};

export default CountryInfo;
