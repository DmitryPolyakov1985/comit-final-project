import React, { useState, useEffect } from 'react'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function FiveDayForecast() {
    const [forecast, setForecast] = useState('');

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

    return (
        <div>
            <h1>5-Day Forecast in {forecast.city}, {forecast.country}</h1>
            
        </div>
    );
}

export default FiveDayForecast;