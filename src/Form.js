import React from 'react';
import './Form.css'

function Form(props) {
    
    return (
        <form className='form' onSubmit={props.getCurrentWeather}>
            <input
                onChange={props.handleCityInput}
                value={props.city}
                id='city' 
                type="text"
                name="city"
                placeholder="City"
            />
            <input
                onChange={props.handleCountryInput}
                value={props.country}
                id='country'
                type="text"
                name="country"
                placeholder="Country"
            />
            <button>Get Weather</button>
        </form>
    );
}

export default Form;