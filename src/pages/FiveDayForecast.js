
import React, { useState, useEffect } from 'react';
import './FiveDayForecast.css'

import Form from './../Form'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function FiveDayForecast() {
    const [forecast, setForecast] = useState('');
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Saskatoon,ca&mode=json&units=imperial&APPID=${apiKey}`)
            const jsonData = await response.json()
            console.log(jsonData)

            
            setForecast({
                city: jsonData.city.name,
                country: jsonData.city.country,
                date: jsonData.list[0].dt
            }); 
        }
        fetchData();
    }, [])

    function handleCityInput(e) {
        setCity(e.currentTarget.value);
    }

    function handleCountryInput(e) {
        setCountry(e.currentTarget.value);
    }

    return (
        <div className='fiveDayForecastContainer'>
            <Form
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
            />
            <p>City: {city}</p>
            <p>Country: {country}</p>

            <h1>5-Day Forecast in {forecast.city}, {forecast.country}</h1>
            <p>Date: {forecast.date}</p>
            
        </div>
    );
}

export default FiveDayForecast;