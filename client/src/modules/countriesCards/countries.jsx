import { useEffect} from 'react';
import {connect} from 'react-redux'
import {getCountries} from '../../redux/actions'


  function AllCountriesCards ({countries, getCountries}){
    
    
    

    useEffect(() => {
        getCountries()
        console.log(countries)
    },[])
 
    return( 
        
    <div>{countries.map((country) => {
        return <div>
            <p>name:{country.name}</p>
            <p>continent:{country.continent}</p>
            <img src={country.flag} alt='imagen de bandera de pais'/>
        </div>;
    })}</div>
    )

}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: countries => {
            dispatch(getCountries(countries))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCountriesCards)