import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryCard({name, id, flag, population, continent}) {
    return(
        <div>
            <Link to={`/CountryDetail/${id}`}>
                <img src={flag} alt={`Bandera de ${name}`}/>
                </Link>
                <div>
                    <h1>{name}</h1>
                    <p>Region: {continent}</p>
                    <p>Population: {population}</p>
                </div>
        </div>
    )
}