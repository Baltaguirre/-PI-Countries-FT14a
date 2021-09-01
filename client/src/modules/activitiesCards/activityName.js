import React from 'react';
import styles from './styles.module.css'

export default function ActivityName({name, duration, dificulty, season, countries, onClose, activityNameButtonClose}) {
    
     


    


   return (
     <div >
        
             
             {activityNameButtonClose ?
            <div className={styles.activityName}>
               <button className={styles.btnClose} onClick={onClose}>X</button>
                  <h1>{name}</h1>
                    <p>Duración: {duration}</p>
                    <p>Dificultad: {dificulty}</p>
                    <p>Temporada: {season}</p>
                    <p>Países: {countries ? 
                    JSON.stringify(countries.map(country => country.name).join(', ')) : null}
                    </p>
             </div>
             : null   }
               
        </div>
    )
}

