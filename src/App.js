import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' 
import './App.css';
import Form from './Form';
import Weather from './Weather';
import FiveDayForecast from './pages/FiveDayForecast';
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function App() {
  const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState('');
  // const [country, setCountry] = useState('');

  const fetchCurrentWeatherData = async(e) => {
    e.preventDefault();
    // setCity(e.currentTarget.elements.city.value)
    // setCountry(e.currentTarget.elements.country.value)
    let city = e.currentTarget.elements.city.value;
    let country = e.currentTarget.elements.country.value;
  
    try {
      if(city !== '' && country !== '') {
        // setCity(e.currentTarget.elements.city.value = '');
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${apiKey}`);

        if(response.ok) {
          const data = await response.json();
          
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
    }	
  }

  return (
    <div className="App">
      <h1>My Weather App for ComIT</h1>
      <Form getCurrentWeather={fetchCurrentWeatherData}/>
      
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

      <Router>
        <div>
          <Link to='/pages/'>Hey</Link>
        </div>
        <Switch>
          <Route path='/pages/'>
            <FiveDayForecast />
          </Route>
          
          
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
