import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css'

export default function CountryCard({name, id, flag, population, continent}) {
    return(
        <div className={styles.container}>
        <div className={styles.countryCard}>
            <Link to={`/detail/${id}`}>
                <img  src={flag} alt={`Bandera de ${name}`} />
                </Link>
                <div>
                    <h1>{name}</h1>
                    <p>Region: {continent}</p>
                    <p>Population: {population}</p>
                </div>
        </div>
        </div>
    )
}