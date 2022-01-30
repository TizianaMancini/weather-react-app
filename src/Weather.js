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

      <div className="row">
        <div className="col-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Light Snow"
          />
          5ºC
        </div>

        <div className="col-4">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 5%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
