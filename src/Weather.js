import React from 'react'

function Weather( props ) {
    return (
        <div>
            {props.city && <p>City: {props.city}</p>}
            {props.country && <p>Country: {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}<sup>o</sup>C</p>}
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