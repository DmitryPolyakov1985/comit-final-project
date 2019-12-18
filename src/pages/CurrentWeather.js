import React, { useState } from 'react';

import Form from './../Form';
import Weather from './../Weather';
import './CurrentWeather.css'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

function CurrentWeather() {
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
            
            setWeather({
                data: data,
                date: data.dt,
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp.toFixed(1),
                feelsLikeTemp: data.main.feels_like.toFixed(1),
                minTemp: data.main.temp_min.toFixed(1),
                maxTemp: data.main.temp_max.toFixed(1),
                description: data.weather[0].description,
                icon: data.weather[0].icon, 
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
            feelsLikeTemp: '',
            minTemp: '',
            maxTemp: '',
            description: '',
            icon: '',
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
                feelsLikeTemp: '',
                minTemp: '',
                maxTemp: '',
                description: '',
                icon: '',
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
        <div className='currentWeather'>
            <h1>Current Weather</h1>

            <Form 
                fetchCurrentWeatherData={fetchCurrentWeatherData}
                handleCityInput={handleCityInput}
                handleCountryInput={handleCountryInput}
                city={city}
                country={country}
            />
            
            <Weather
                icon={weather.icon}
                date={weather.date}
                city={weather.city}
                country={weather.country}
                temperature={weather.temperature}
                feelsLikeTemp={weather.feelsLikeTemp}
                minTemp={weather.minTemp}
                maxTemp={weather.maxTemp}
                description={weather.description}
                clouds={weather.clouds}
                wind={weather.wind}
                humidity={weather.humidity}
                error={weather.error}
            />
        </div>
    );
}

export default CurrentWeather;