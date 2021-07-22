import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries,getAllActivities } from '../../redux/actions'
import CountriesCards from '../countriesCards/countries/countriesCards.js'
import SearchBar from '../searchbar'
import SearchBarActivity from '../activitiesCards/searchBarActivity'
import styles from './styles.module.css'
import Nav from '../navBar/index.js'

function Home({ countries, getCountries, getAllActivities, onClose }) {


    useEffect(() => {
        getCountries()
        getAllActivities()
    }, [])

    return (
        <div className={styles.container}>
          <Nav />
         
      <div>
           <CountriesCards  countries={countries} />
        </div>
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
        getAllActivities: () => dispatch(getAllActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)