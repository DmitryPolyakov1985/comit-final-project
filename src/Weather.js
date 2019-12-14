import React from 'react';
import './Weather.css';

function Weather( props ) {
    return (
        <div>
            <div className='thumbnail'>
                {props.date && <p>{props.date}</p>}
                {props.icon && <img className='icon' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />}
                {props.minTemp && <p>Min temperature: {props.minTemp}<sup>o</sup>C</p>}
                {props.maxTemp && <p>Max temperature: {props.maxTemp}<sup>o</sup>C</p>}
            </div>
            
            {props.city && <p>City: {props.city}</p>}
            {props.country && <p>Country: {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}<sup>o</sup>C</p>}
            {props.feelsLikeTemp && <p>Feels like: {props.feelsLikeTemp}<sup>o</sup>C</p>}
            
            {props.description && <p>Description: {props.description}</p>}
    {props.wind && <p>Wind: {props.wind} m/s</p>}
            {props.clouds && <p>Clouds: {props.clouds}%</p>}
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.icon && <p>Icon: {props.icon}</p>}
            {props.error && <p>Error: {props.error}</p>}
            
        </div>
    );
}

export default Weather;