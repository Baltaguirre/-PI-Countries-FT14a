import React, { useState, useEffect, Fragment } from 'react';
import CountryCard from '../country/countryCard'
import { connect } from 'react-redux';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function CountriesCards({ countries }) {
    const [actualStateCountries, setActualStateCountries] = useState([])

    const countriesPerPage = 10
    const pages = Math.ceil(countries.length / countriesPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    const showPages = (pageNum) => {
        const index = pageNum * countriesPerPage + 1;
        setActualStateCountries(countries.slice(index - countriesPerPage - 1, index - 1));
        setCurrentPage(pageNum)

    }


    useEffect(() => {

        showPages(1)

    }, [countries])

    return (
        <>

            <div className={styles.wrapper}>
                <div className={styles.searchContainer}>
                    <button className={styles.btn} onClick={() => showPages(currentPage > 1 ?
                        currentPage - 1 : currentPage)}>{`<Anteriores 10 Países`}</button>
                    <div>
                        <Link to={"/createactivity"}>
                            <button className={styles.btn}>crear actividad</button>
                        </Link>
                    </div>
                    <button className={styles.btn} onClick={() => showPages(currentPage < pages ?
                        currentPage + 1 : currentPage)}>{`Próximos 10 Países>`}</button>
                </div>
            
            <div className={styles.container}>
                {actualStateCountries && actualStateCountries.map((country, i) => (

                    

                        <CountryCard
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            population={country.population}
                            flag={country.flag}
                            continent={country.continent}
                        />
                   

                ))}
            </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {

    return {
        countries: state.countries,

    }
}

export default connect(mapStateToProps, null)(CountriesCards)