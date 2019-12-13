import React, { useState, useEffect } from 'react'
import Form from './../Form'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function FiveDayForecast() {
    const [forecast, setForecast] = useState('');
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Saskatoon,ca&mode=json&units=metric&APPID=${apiKey}`)
            const jsonData = await response.json()
            console.log(jsonData)
            setForecast({
                city: jsonData.city.name,
                country: jsonData.city.country
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
        <div>
            <h1>Get 5-day Forecast</h1>
            <Form
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
            />
            <p>City is: {city}</p>
            <p>Country is: {country}</p>
            
            <p>Weather in {forecast.city}, {forecast.country}</p>
        </div>
    );
}

export default FiveDayForecast;