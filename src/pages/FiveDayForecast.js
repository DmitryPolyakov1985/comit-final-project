<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react'
>>>>>>> bac101a84c6c8dd84e49d2ad66a4dab2ff7f74c6
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
            <Form
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
            />
            <p>City: {city}</p>
            <p>Country: {country}</p>

            <h1>5-Day Forecast in {forecast.city}, {forecast.country}</h1>
            
        </div>
    );
}

export default FiveDayForecast;