import React from 'react';



export default function ActivityName({name, duration, dificulty, season, countries}) {
    
   return (
        <div>
             <div>
                    <h1>{name}</h1>
                    <p>Duración: {duration}</p>
                    <p>Dificultad: {dificulty}</p>
                    <p>Temporada: {season}</p>
                    <p>Países: {countries ? 
                    JSON.stringify(countries.map(country => country.name).join(', ')) : null}</p>
             </div>
        </div>
    )
}

