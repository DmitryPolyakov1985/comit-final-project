import React from 'react';
import './Weather.css';

function Weather( props ) {
    return (
        <div className='weatherContainer'>
            <div className='weatherBox'>
                {props.date && <p>{props.date}</p>}
                {props.icon && <img className='icon' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='Weather Icon'/>}
                {props.description && <p style={{ fontWeight: 'bolder' }}> {props.description}</p>}
                <div className="weatherBoxTemperature">
                    {props.minTemp && <p className='minTemp'>{props.minTemp}<sup>o</sup>C</p>}
                    {props.maxTemp && <p className='maxTemp'>{props.maxTemp}<sup>o</sup>C</p>}
                </div>
            </div>

            <div className="weatherData">
                {props.city && <p><strong>City: </strong> {props.city}</p>}
                {props.country && <p><strong>Country: </strong>{props.country}</p>}
                {props.temperature && <p><strong>Temperature: </strong> {props.temperature}<sup>o</sup>C</p>}
                {props.feelsLikeTemp && <p><strong>Feels like: </strong> {props.feelsLikeTemp}<sup>o</sup>C</p>}
                
                {props.wind && <p><strong>Wind: </strong> {props.wind} m/s</p>}
                {props.clouds && <p><strong>Clouds: </strong> {props.clouds}%</p>}
                {props.humidity && <p><strong>Humidity: </strong> {props.humidity}%</p>}
                {props.error && <p><strong>Error: </strong> {props.error}</p>}
            </div>
            
        </div>
    );
}

export default Weather;