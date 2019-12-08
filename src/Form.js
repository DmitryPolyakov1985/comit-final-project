import React from 'react'

function Form(props) {
    return (
        <form onSubmit={props.getCurrentWeather}>
            <input 
                id='city' 
                type="text"
                name="city"
                placeholder="City"
            />
            <input 
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