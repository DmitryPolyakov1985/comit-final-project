import React from 'react'
// var moment = require('moment');

function DayCard(props) {
    console.log(props)
    let newDate = new Date();
    const weekday = props.reading.dt * 1000
    newDate.setTime(weekday)

    return (
        <div className="col-sm-2" style={{ border: '1px solid #000' }} >
            <div className="card">
                {/* <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p> */}
                <p>{weekday}</p>
                <p>{props.cityName}</p>
                <p>{props.reading.main.temp.toFixed(1)}<sup>o</sup>C</p>
                <p className="card-text">{props.reading.weather[0].description}</p>
            </div>   
        </div>
    );
}

export default DayCard;