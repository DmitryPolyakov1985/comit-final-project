
import React, { useState } from 'react';
import './FiveDayForecast.css'

import FiveDayForm from './../FiveDayForm';
import FiveDayWeather from './../FiveDayWeather'
const apiKey = '4fad5043f986c8cf84c29a4a3e7c3f49';

// const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Saskatoon,ca&mode=json&units=metric&APPID=${apiKey}`)

function FiveDayForecast() {
    let [forecast, setForecast] = useState([]);
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');

    const fetchFiveDayForecast = async(e) => {
        e.preventDefault();
    
        try {
        if(city !== '' && country !== '') {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&units=metric&APPID=${apiKey}`);

            if(response.ok) {
                const data = await response.json();
                console.log(data)
                const items = data.list.map(item => item)
                console.log(items)

                const dates = []
                    for(let i = 0; i < 10; i++) {
                        dates.push(new Date(items[i].dt * 1000));
                    }
                console.log(dates)

                // items.map(item => console.log(item))
                
                function getDate() {
                    const dates = []
                    for(let i = 0; i < 20; i++) {
                        dates.push(new Date(items[i] * 1000));
                    }
                    console.log(dates)
                    // const dayOfTheMonth = getData.getDate()
                    // // const hours = getData.getHours()
                    // // const minutes = getData.getMinutes()
                    // const month = getData.getMonth()
                    // const year = getData.getFullYear()
                
                    // const day = getData.getDay()
                    // let dayOfTheWeek = ''
                    // switch(day) {
                    //     case 0:
                    //         dayOfTheWeek = 'Sun';
                    //         break;
                    //     case 1:
                    //         dayOfTheWeek = 'Mon';
                    //         break;
                    //     case 2:
                    //         dayOfTheWeek = 'Tue';
                    //         break;
                    //     case 3:
                    //         dayOfTheWeek = 'Wed';
                    //         break;
                    //     case 4:
                    //         dayOfTheWeek = 'Thur';
                    //         break;
                    //     case 5:
                    //         dayOfTheWeek = 'Fri';
                    //         break;
                    //     case 6:
                    //         dayOfTheWeek = 'Sat';
                    //         break;             
                    // }
                
                    // let monthOfTheYear = ''
                    // switch(month) {
                    //     case 1:
                    //         monthOfTheYear = 'Jan';
                    //         break;
                    //     case 2:
                    //         monthOfTheYear = 'Feb';
                    //         break;
                    //     case 3:
                    //         monthOfTheYear = 'Mar';
                    //         break;
                    //     case 4:
                    //         monthOfTheYear = 'Apr';
                    //         break;
                    //     case 5:
                    //         monthOfTheYear = 'May';
                    //         break;
                    //     case 6:
                    //         monthOfTheYear = 'Jun';
                    //         break;
                    //     case 7:
                    //         monthOfTheYear = 'Jul';
                    //         break;
                    //     case 8:
                    //         monthOfTheYear = 'Aug';
                    //         break;
                    //     case 9:
                    //         monthOfTheYear = 'Sep';
                    //         break;
                    //     case 10:
                    //         monthOfTheYear = 'Oct';
                    //         break;
                    //     case 11:
                    //         monthOfTheYear = 'Nov';
                    //         break;
                    //     case 12:
                    //         monthOfTheYear = 'Dec';
                    //         break;         
                    // }
                    // const fullDate = `${dayOfTheWeek}, ${monthOfTheYear} ${dayOfTheMonth}, ${year}`
                    // return fullDate
                }
                
                setForecast({
                    data: data,
                    // date: getDate(),
                    city: data.city.name,
                    country: data.city.country,
                    temp: data.list[0].main.temp,

                    error: ''
                });
                
                setCity(city = '');
                setCountry(country = '');
            } else {
                throw Error("OOOpppps");
            }
        } else {
            setForecast({
            data: '',
            city: '',
            country: '',
            
            error: 'Please enter city and country'
            });
        }
        } catch(err) {
        console.warn(err);
        setForecast({
            data: '',
            city: '',
            country: '',
            
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
            
            <FiveDayWeather
                date={forecast.city}
            />
            
            
        </div>
    );
}

export default FiveDayForecast;