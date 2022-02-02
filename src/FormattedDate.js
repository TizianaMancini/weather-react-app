import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
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

  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let zone = "am";

  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour > 12) {
    zone = "pm";
  } else {
    zone = "am";
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  return (
    <div>
      {day}, {month} {date}, {year} at {hour}:{minutes}
      {zone}
    </div>
  );
}
