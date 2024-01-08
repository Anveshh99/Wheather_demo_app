import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await axios.post('http://localhost:5000/weather', { city });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  return (
    <div className="App">
      <WeatherForm getWeather={getWeather} />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;
