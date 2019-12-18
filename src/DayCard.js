import React from 'react';
import './DayCard.css';

const moment = require('moment');

function DayCard(props) {
    console.log(props)
    let newDate = new Date();
    const weekday = props.reading.dt * 1000
    newDate.setTime(weekday)

    return (
        <div className="weatherCard">
            <h3>{moment(newDate).format(`ddd`)}</h3>
            <p>{moment(newDate).format(`MMM D, YYYY`)}</p>
            <p><strong>{props.cityName}</strong> </p>
            <p style={{ fontSize: '26px' }}><strong>{props.reading.main.temp.toFixed(1)}<sup>o</sup>C</strong> </p>
            <img className='icon' src={`http://openweathermap.org/img/wn/${props.reading.weather[0].icon}@2x.png`} alt='Weather Icon'/>
            
            <p><strong>Feels like: <br /></strong> {props.reading.main.feels_like.toFixed(1)}<sup>o</sup>C</p>
            <p><strong>{props.reading.weather[0].description}</strong></p>
        </div>   
        
    );
}

export default DayCard;