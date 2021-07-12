import React, {useState, useEffect, Fragment} from 'react';
import CountryCard from './countryCard'
import { connect } from 'react-redux';


 function CountriesCards({countries}){
const [actualStateCountries, setActualStateCountries] = useState([])

const countriesPerPage = 10
const pages = Math.ceil(countries.length / countriesPerPage)
const [currentPage, setCurrentPage] = useState(1)

const showPages = (pageNum) => {
    const index = pageNum === 0 ? pageNum + 1 * countriesPerPage : pageNum * countriesPerPage + 1;
    setActualStateCountries(countries.slice(index - countriesPerPage, index));
    setCurrentPage(pageNum)
}

useEffect(() =>{
showPages(0)
}, [countries])

return (
    <Fragment>
        <div>
            <button onClick={() => showPages(currentPage >= 1 ? currentPage - 1 : currentPage)}>{`<`}</button>
            <button onClick={() => showPages(currentPage < pages ? currentPage + 1 : currentPage)}>{`>`}</button>
        </div>
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