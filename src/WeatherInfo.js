import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.data.image} />
          <WeatherTemperature celsius={props.data.temperature} />
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
              <strong className="text-capitalize">
                {props.data.description}
              </strong>
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
