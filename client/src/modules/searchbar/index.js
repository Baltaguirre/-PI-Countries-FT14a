import React from 'react';
import { useEffect } from 'react';
import { getCountryByName } from '../../redux/actions.js';
import { connect } from 'react-redux';

function SearchBar({match, country, getCountryByName }) {


  

    useEffect(() => {
        console.log(match.req.query)
        getCountryByName(match.req.query)

    },)



    return (
    
        <div>
            <p>name:{country.name}</p>
            <p>continet:{country.region}</p>
            <p>capital:{country.capital}</p>
            <p>flag:</p>
            <img src={country.flag} alt="countryflag" />
            
        </div>
    
        
    )
}

const mapStateToProps = (state) => {
    return {
        country: state.country
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryByName: country => {
            dispatch(getCountryByName(country))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)