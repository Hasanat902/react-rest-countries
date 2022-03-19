import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,area,flags,capital,population} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <h4>Area: {area}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;