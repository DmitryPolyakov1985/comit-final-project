import React, { useState, useEffect } from 'react'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function FiveDayForecast() {
    const [forecast, setForecast] = useState('');

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=json&units=metric&APPID=${apiKey}`)
            const jsonData = await response.json()
            console.log(jsonData)
            setForecast({
                city: jsonData.city.name
            }); 
        }
        fetchData();
    }, [])

    return (
        <div>
            {forecast.city}
        </div>
    );
}

export default FiveDayForecast;