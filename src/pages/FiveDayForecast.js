import React, { useState } from 'react';
import './FiveDayForecast.css'

import FiveDayForm from './../FiveDayForm';
import DayCard from './../DayCard';
import FiveDayWeather from './../FiveDayWeather'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';


function FiveDayForecast() {
    let [fullData, setFullData] = useState([]);
    const [dailyData, setDailyData] = useState([]);
    let [city, setCity] = useState('');
    let [cityName, setCityName] = useState('');
    let [country, setCountry] = useState('');
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&units=metric&APPID=${apiKey}`;

    const fetchFiveDayForecast = async(e) => {
        e.preventDefault();

        const res = await fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                console.log(data)
                setCityName(data.city.name);
                setFullData(data);
                setDailyData(dailyData);
                
                
                // console.log(dailyData)
            })
            console.log(fullData)
    
    } 

    function handleCityInput(e) {
        setCity(e.currentTarget.value);
    }

    function handleCountryInput(e) {
        setCountry(e.currentTarget.value);
    }

    function formatDayCards() {
        return dailyData.map((reading, index) => <DayCard cityName={cityName} reading={reading} key={index} />)
        
    }

    return (
        <div className='fiveDayForecastContainer'>
            <h1>5-day Forecast</h1>
            
            <FiveDayForm
                fetchFiveDayForecast={fetchFiveDayForecast}
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
                city={city}
                country={country}
            />
            
            <div>
                {formatDayCards()}
            </div>
        </div>
    );
}

export default FiveDayForecast;