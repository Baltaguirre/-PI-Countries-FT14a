import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css'

export default function CountryCard({name, id, flag, population, continent}) {
    return(
        <div >
        <div className={styles.countryCard}>
            <Link to={`/detail/${id}`}>
                <img  src={flag} alt={`Bandera de ${name}`} />
                </Link>
                <div >
                    <h3>{name}</h3>
                    <p>Continente: {continent}</p>
                    
                </div>
        </div>
        </div>
    )
}