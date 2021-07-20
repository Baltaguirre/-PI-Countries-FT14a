import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css'

export default function CountryName({name, id, flag, population, continent, onClose, countryNameButtonClose}) {
    
   return (
        <div>
            {countryNameButtonClose ?
            
            <div className={styles.countryName}>
                <button onClick={onClose}>X</button>
            <Link to={`/detail/${id}`}>
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


