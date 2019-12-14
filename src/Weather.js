import React from 'react';
import './Weather.css';

function Weather( props ) {
    return (
        <div className='weatherContainer'>
            <div className='weatherBox'>
                {props.date && <p>{props.date}</p>}
                {props.icon && <img className='icon' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />}
                <div className="weatherBoxTemperature">
                    {props.minTemp && <p className='minTemp'>{props.minTemp}<sup>o</sup>C</p>}
                    {props.maxTemp && <p className='maxTemp'>{props.maxTemp}<sup>o</sup>C</p>}
                </div>
            </div>

            <div className="weaterData">
                {props.city && <p><strong>City: </strong> {props.city}</p>}
                {props.country && <p>Country: {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}<sup>o</sup>C</p>}
                {props.feelsLikeTemp && <p>Feels like: {props.feelsLikeTemp}<sup>o</sup>C</p>}
                {props.description && <p>Description: {props.description}</p>}
                {props.wind && <p>Wind: {props.wind} m/s</p>}
                {props.clouds && <p>Clouds: {props.clouds}%</p>}
                {props.humidity && <p>Humidity: {props.humidity}%</p>}
                {props.error && <p>Error: {props.error}</p>}
            </div>
            
        </div>
    );
}

export default Weather;