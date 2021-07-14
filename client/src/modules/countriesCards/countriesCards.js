import React, {useState, useEffect, Fragment} from 'react';
import CountryCard from './countryCard'
import { connect } from 'react-redux';


 function CountriesCards({countries}){
const [actualStateCountries, setActualStateCountries] = useState([])

const countriesPerPage = 10
const pages = Math.ceil(countries.length / countriesPerPage)
const [currentPage, setCurrentPage] = useState(1)

const showPages = (pageNum) => {
    const index =  pageNum * countriesPerPage + 1;
  
    setActualStateCountries(countries.slice(index - countriesPerPage - 1, index - 1));
    setCurrentPage(pageNum)
}

useEffect(() =>{
showPages(1)
}, [countries])

return (
    <Fragment>
        <div>
            <button onClick={() => showPages(currentPage > 1 ? currentPage - 1 : currentPage)}>{`<Anteriores 10 Países`}</button>
            <button onClick={() => showPages(currentPage < pages ? currentPage + 1 : currentPage)}>{`Próximos 10 Países>`}</button>
        </div>
        <h1>Países del Mundo!</h1>
        <div>
            {actualStateCountries && actualStateCountries.map((country, i) => (
                <div>
                  
                    <CountryCard
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    population={country.population}
                    flag={country.flag}
                    continent={country.continent}
                    />
                </div>
            ))}
        </div>
        </Fragment>
    )
 }


const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps,null)(CountriesCards)