import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: "true",
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: "Sunday January 30, 2022 at 11:30am",
      image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    const apiKey = "fc792abbce83245fb7f94d72bd9f905d";
    let city = "Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current Location"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>

        <h1>Toronto</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row weather-details">
          <div className="col-8">
            <img src={weatherData.image} alt={weatherData.description} />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">ºC</span>
          </div>

          <div className="col-4">
            <ul>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity}%
              </li>
              <li>
                <strong>Wind:</strong> {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <strong>Snow</strong>
              </li>
              <li>
                <strong>High:</strong> <strong>| Low:</strong>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fc792abbce83245fb7f94d72bd9f905d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
