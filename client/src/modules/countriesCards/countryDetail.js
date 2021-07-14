import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';


function CountryDetail({ match, country, getCountryId }) {

    useEffect(() => {
        getCountryId(match.match.params.id)
    },[])

    return (
        <div>
            <div>
                <h1>{country.name} </h1>
                <h2>Código de país: {country.id}</h2>
            </div>
            <div>
                <img src={country.flag} alt="Imagen de bandera rota" />
            </div>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.continent}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area} km²</p>
            <p>Population: {country.population}</p>
            <p>Activities:{' '}
                <div>
                    {
                        country.activities ? country.activities.map((activity) => <span>{activity.name}</span>) : null
                    }
                </div>
            </p>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        country: state.country,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryId: (countryId) => dispatch(getCountryDetail(countryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail)