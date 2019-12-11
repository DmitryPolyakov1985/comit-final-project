import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function App() {
  let [weather, setWeather] = useState([]);
  let [city, setCity] = useState('');
  let [country, setCountry] = useState('');

  const fetchCurrentWeatherData = async(e) => {
    e.preventDefault();
    
    try {
      if(city !== '' && country !== '') {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${apiKey}`);

        if(response.ok) {
          const data = await response.json();
          console.log(data.name)
        
          setWeather({
            data: data,
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp.toFixed(1),
            description: data.weather[0].description,
            clouds: data.clouds.all,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            error: ''
          });
          
          setCity(city = '');
          setCountry(country = '');

        } else {
          throw Error("OOOpppps");
        }
      } else {
        setWeather({
          data: '',
          city: '',
          country: '',
          temperature: '',
          description: '',
          clouds: '',
          wind: '',
          humidity: '',
          error: 'Please enter city and country'
        });
      }
    } catch(err) {
      console.warn(err);
      setWeather({
        data: '',
        city: '',
        country: '',
        temperature: '',
        description: '',
        clouds: '',
        wind: '',
        humidity: '',
        error: 'Looks like city or country does\'t exist... '
      });
    }	
  }

  function handleCityInput(e) {
    setCity(e.currentTarget.value);
  }

  function handleCountryInput(e) {
    setCountry(e.currentTarget.value);
  }

  return (
    <div className="App">
      <h1>My Weather App for ComIT</h1>
      
      <Form 
        getCurrentWeather={fetchCurrentWeatherData}
        handleCityInput={handleCityInput}
        handleCountryInput={handleCountryInput}
        city={city}
        country={country}
      />
      
      <Weather
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
        clouds={weather.clouds}
        wind={weather.wind}
        humidity={weather.humidity}
        error={weather.error}
      />
    </div>
  );
}

export default App;
