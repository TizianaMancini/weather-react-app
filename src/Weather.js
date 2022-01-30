import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <li>Sunday January 30, 2022 at 11:30am</li>
        <li>Snow</li>
      </ul>

      <div className="row weather-details">
        <div className="col-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Light Snow"
          />
          <span className="temperature">5</span>
          <span className="units">ºC</span>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <strong>Precipitation:</strong> 10%
            </li>
            <li>
              <strong>Humidity:</strong> 5%
            </li>
            <li>
              <strong>Wind:</strong> 5 km/h
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
}
