import {useState, useEffect} from 'react';
import axios from 'axios';
import { COUNTRIES_URL, NAME_COUNTRY_URL, ID_COUNTRY_URL } from '../../constanst';


export default function CountryByNameCard(){
    const [country, setCountry] = useState([])

    function getCountryByName (name){
        return axios.get(`NAME_COUNTRY_URL${name}` )
        .then(country => setCountry(country))
    }

    useEffect(() => {
        getCountryByName()
    },[])


 
    return (
        <div className="CountryCardStyle">
            <p>name:{country.name}</p>
            <p>continet:{country.name}</p>
            <p>capital:{country.name}</p>
            <p>flag:</p>
            <img src={country.flag} alt="countryflag"/>
        </div>
    )
}