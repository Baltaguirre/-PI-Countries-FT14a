import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries } from '../../redux/actions'
import CountriesCards from '../countriesCards/countries/countriesCards.js'
import Searchbar from "../searchbar";
import SearchBarActivity from "../activitiesCards/searchBarActivity";
import CountriesAlphabeticOrder from "../filters/countryAlphabeticOrder";
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Nav from '../navBar/index.js'

function Home({ countries, getCountries }) {


    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div className={styles.container}>
            <div >
                <Nav />
            </div>
            <CountriesCards countries={countries} />
        </div>
    )


}

const mapStateToProps = (state) => {
    console.log(state.countries)
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)