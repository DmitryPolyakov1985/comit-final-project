import React from 'react'
import { directive } from '@babel/types';

function Form(props) {
    return (
        <form onClick={props.getWeather}>
            <input 
                type="text"
                name="city"
                placeholder="City"
            />
            <input 
                type="text"
                name="country"
                placeholder="Country"
            />
            <button>Get Weather</button>
        </form>
    );
}

export default Form;