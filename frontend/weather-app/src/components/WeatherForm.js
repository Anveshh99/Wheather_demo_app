import React, { useState } from 'react';

function WeatherForm({ getWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
