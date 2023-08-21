/* eslint-disable react/prop-types */
// import React from 'react';

import './Country.css'
const Country = (props) => {
    const {area} = props.country;
    return (
        
            <div className="country">
            {/* <h3>Country Name: {props.name}</h3>
            <p>Population: {props.population}</p>
            <small>Area: {props.area}</small>
            <h6>Region: {props.region}</h6> */}
            <h3>Country Name: {props.country.name.common}</h3>
            <h4>Population: {props.country.population}</h4>
            {/* <p><small>Area: {props.country.area} SqKm</small></p> */}
            <h4>Area: <small>{area} SqKm</small></h4>
            <h5>Region: {props.country.region}</h5>
            <img className='flagimg' src={props.country.flags.png} alt="" />
        </div>
        
    );
};

export default Country;