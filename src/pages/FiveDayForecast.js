import React, { useState } from 'react';
import './FiveDayForecast.css'

import FiveDayForm from './../FiveDayForm';
import FiveDayWeather from './../FiveDayWeather'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function FiveDayForecast() {
    let [forecast, setForecast] = useState([]);
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');

    const fetchFiveDayForecast = async(e) => {
        e.preventDefault();

        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&units=metric&APPID=${apiKey}`)
        const jsonData = await res.json()
        console.log(jsonData)

        
    } 

    function handleCityInput(e) {
        setCity(e.currentTarget.value);
    }

    function handleCountryInput(e) {
        setCountry(e.currentTarget.value);
    }

    return (
        <div className='fiveDayForecastContainer'>
            <h1>5-day Forecast</h1>
            <p>{forecast.temp}</p>
            
            <FiveDayForm
                fetchFiveDayForecast={fetchFiveDayForecast}
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
                city={city}
                country={country}
            />


        </div>
    );
}

export default FiveDayForecast;