import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getCountries } from '../../redux/actions'
import CountriesCards from '../countriesCards/countriesCards.js'

function Home({countries, getCountries}){
useEffect(() => {
    getCountries()
},[])

return (
    <div>
        <CountriesCards countries={countries}/>
    </div>
)


}

const mapStateToProps = (state) => {
    return {
        countries :state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)