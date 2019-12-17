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
            console.log(data)
            
            function getDate() {
                const getData = new Date(data.dt * 1000)
                console.log(getData)
                const dayOfTheMonth = getData.getDate()
                // const hours = getData.getHours()
                // const minutes = getData.getMinutes()
                const month = getData.getMonth()
                const year = getData.getFullYear()
            
                const day = getData.getDay()
                let dayOfTheWeek = ''
                switch(day) {
                    case 0:
                        dayOfTheWeek = 'Sun';
                        break;
                    case 1:
                        dayOfTheWeek = 'Mon';
                        break;
                    case 2:
                        dayOfTheWeek = 'Tue';
                        break;
                    case 3:
                        dayOfTheWeek = 'Wed';
                        break;
                    case 4:
                        dayOfTheWeek = 'Thur';
                        break;
                    case 5:
                        dayOfTheWeek = 'Fri';
                        break;
                    case 6:
                        dayOfTheWeek = 'Sat';
                        break;             
                }
            
                let monthOfTheYear = ''
                switch(month) {
                    case 1:
                        monthOfTheYear = 'Jan';
                        break;
                    case 2:
                        monthOfTheYear = 'Feb';
                        break;
                    case 3:
                        monthOfTheYear = 'Mar';
                        break;
                    case 4:
                        monthOfTheYear = 'Apr';
                        break;
                    case 5:
                        monthOfTheYear = 'May';
                        break;
                    case 6:
                        monthOfTheYear = 'Jun';
                        break;
                    case 7:
                        monthOfTheYear = 'Jul';
                        break;
                    case 8:
                        monthOfTheYear = 'Aug';
                        break;
                    case 9:
                        monthOfTheYear = 'Sep';
                        break;
                    case 10:
                        monthOfTheYear = 'Oct';
                        break;
                    case 11:
                        monthOfTheYear = 'Nov';
                        break;
                    case 12:
                        monthOfTheYear = 'Dec';
                        break;         
                }
                const fullDate = `${dayOfTheWeek}, ${monthOfTheYear} ${dayOfTheMonth}, ${year}`
                return fullDate
            }
            
            setWeather({
                data: data,
                date: getDate(),
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