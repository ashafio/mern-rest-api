// import React from 'react';

import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data));
    },[])

    return (

            <div>
            <h2>Total Countries: {countries.length}</h2>
            <div className="countryparent">
            {
                countries.map(country => <Country 
                    country={country}
                    // name={country.name.common}
                    // population={country.population}
                    // area={country.area}
                    // region={country.region}

                    
                    key={country.cca3}
                    ></Country>)
            }
            </div>
            
        </div>
        
        
    );
};

export default Countries;