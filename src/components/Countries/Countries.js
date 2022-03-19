import React, { useEffect, useState } from 'react';
import Country from '../Country.js/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    console.log(countries);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1 style={{color: 'tomato'}}>Here you can find all countries of the world</h1>
            <h2>Countries: {countries.length}</h2>
            <div className='countries'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;