import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../../redux/actions';
import styles from './styles.module.css'

function CountryDetail({ match, country, getCountryId }) {

    useEffect(() => {
        getCountryId(match.match.params.id)
    },[])

    return (
        <div className={styles.container}>
        <div className={styles.countryCard}>
            <div>
                <h1>{country.name} </h1>
                <h2>Código de país: {country.id}</h2>
            </div>
            <div>
                <img src={country.flag} alt="Imagen de bandera rota" />
            </div>
            <div className={styles.info}>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.continent}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area} km²</p>
            <p>Population: {country.population}</p>
            <p>Activities: {country.activities ? country.activities.map((activity) => '«' + activity.name + '» ' ) : null}
                
            </p>
            </div>
        </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    console.log(state.country)
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