import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div>
      <h2>Weather Information</h2>
      <p>City: {data.city}</p>
      <p>Temperature: {data.temperature}°C</p>
      <p>Description: {data.description}</p>
    </div>
  );
}

export default WeatherInfo;
