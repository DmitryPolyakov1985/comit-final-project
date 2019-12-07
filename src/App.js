import React, { useState } from 'react';
import './App.css';
import Form from './Form'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchWeatherData(e) {
    e.preventDefault()
    setWeather(
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`)
        .then(response => response.json() )
        .then(data => data )
    )
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <h1>My Weather App for ComIT</h1>
      <Form getWeather={fetchWeatherData}/>
      { console.log(weather) }
=======
      Hey  asdfdsfafs
>>>>>>> e915cf6e211a90bc9bba3d7349a87c6d0a91b9b6
    </div>
  );
}

export default App;
