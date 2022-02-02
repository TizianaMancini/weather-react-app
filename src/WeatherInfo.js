import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>Toronto</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row weather-details">
        <div className="col-8">
          <img src={props.data.image} alt={props.data.description} />
          <span className="temperature">{props.data.temperature}</span>
          <span className="units">ºC</span>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind} km/h
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
