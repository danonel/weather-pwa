import React, { useState } from 'react';
import './App.css';

import { fetchWeather } from './services/api'

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWearther] = useState([])

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWearther(data)
      setQuery('')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <span>{weather.sys.country}</span>
          <span>{Math.round(weather.main.temp)}&deg;C</span>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <span>{weather.weather[0].description}</span>

        </div>
      )}
    </div>
  );
}

export default App;