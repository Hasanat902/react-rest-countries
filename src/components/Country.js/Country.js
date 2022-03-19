import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,area} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;