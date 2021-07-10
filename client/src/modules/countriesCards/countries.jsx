import {useState, useEffect} from 'react';
import axios from 'axios';
import { COUNTRIES_URL, NAME_COUNTRY_URL, ID_COUNTRY_URL } from '../../constanst';


 export default function AllCountriesCards (){
    const [countries, setCountries] = useState([])
    
    function getCountries (){
        return axios.get(COUNTRIES_URL)
        .then(countries => setCountries(countries.data))
    }

    useEffect(() => {
        getCountries()
    }, [])
 
    return( 
        
    <div>{countries.map((country) => {
        return <div>
            <p>{country.name}</p>
            <p>{country.continent}</p>
            <img src={country.flag} alt='imagen de bandera de pais'/>
        </div>;
    })}</div>
    )

}

