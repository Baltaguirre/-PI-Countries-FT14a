import React from 'react';


export default function ActivityName({name, duration, dificulty, season, countries, onClose, activityNameButtonClose}) {
    
     


    


   return (
        <div>
             {activityNameButtonClose ?
             <div>
                  
                  <button onClick={onClose}>X</button>
                  
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

