import React from 'react'

function FiveDayWeather(props) {
    return(
        <div>
            {props.date && <p>{props.date}</p>}
        </div>
    );
}

export default FiveDayWeather;