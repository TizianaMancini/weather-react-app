import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-danger active"
              id="celsius-link"
            >
              ºC
            </button>

            <button
              type="button"
              class="btn btn-danger"
              id="fahrenheit-link"
              onClick={showFahrenheit}
            >
              ºF
            </button>
          </div>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-danger"
              id="celsius-link"
              onClick={showCelsius}
            >
              ºC
            </button>

            <button
              type="button"
              class="btn btn-danger active"
              id="fahrenheit-link"
            >
              ºF
            </button>
          </div>
        </span>
      </span>
    );
  }
}
