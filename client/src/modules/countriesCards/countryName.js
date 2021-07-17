import React from 'react';
import {Link} from 'react-router-dom';


export default function CountryName({name, id, flag, population, continent, onClose, countryNameButtonClose}) {
    
   return (
        <div>
            {countryNameButtonClose ?
            
            <div>
                <button onClick={onClose}>X</button>
            <Link to={`/CountryDetail/${id}`}>
                <img src={flag} alt={`Bandera de ${name}`}/>
                </Link>
                <div>
                    <h1>{name}</h1>
                    <p>Region: {continent}</p>
                    <p>Population: {population}</p>
                </div>
                </div>
                : null}
        </div>
    )
}


