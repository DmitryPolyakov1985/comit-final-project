import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

// const apiKey = 'b6b23c1382933bcf5a91c43be9dc3247';

function App() {
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async(e) => {
    e.preventDefault();
    let city = e.currentTarget.elements.city.value;
    let country = e.currentTarget.elements.country.value;
  
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`)
      if(response.ok) {
        const data = await response.json()
        setWeather({
          data: data,
          country: data.sys.country,
          temparature: data.main.temp,
          weatherCond: data.weather[0].description
        })
      } else if(!response.ok) {
        throw Error("OOOpppps");
      }
    } catch(err) {
      console.warn(err);
    }	
  }

  return (
    <div className="App">
      <h1>My Weather App for ComIT</h1>
      <Form getWeather={fetchWeatherData}/>
      { console.log(weather.data) }
      { console.log(weather.weatherCond) }
      
    </div>
  );
}

export default App;
