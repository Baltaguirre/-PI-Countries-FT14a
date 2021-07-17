import React from 'react';
import { useState, useEffect } from 'react'
import { orderCountries, getCountries } from '../../redux/actions';
import { connect } from 'react-redux'


function CountriesAlphabeticOrder({ countriesOrder, orderCountries2, getAllCountries }) {

    function handleName(event) {
        orderCountries2(countriesOrder, { name: event.target.value })
        if (event.target.value === 'Name') {
            getAllCountries(event.target.value)
        }
    }

    function handlePupulation(event) {
        orderCountries2(countriesOrder, { population: event.target.value })
        if (event.target.value === 'Population') {
            getAllCountries(event.target.value)
        }
    }

    function handleContinent(event) {
        orderCountries2(countriesOrder, { continent: event.target.value })
        if (event.target.value === 'Continent') {
            getAllCountries(event.target.value)
        }
    }

    return (
        <div>
            <div>
                <label>Ordenar Países por Nombre</label>
                <select onChange={handleName}>
                    <option label='Select' value='Name'></option>
                    <option value='Ascendent'>Ascendent</option>
                    <option value='Descendent'>Descendent</option>
                </select>

            </div>
            <div>
                <label>Ordenar Países por Poblacion</label>
                <select onChange={handlePupulation}>
                    <option label='Select' value='Population'></option>
                    <option value='Ascendent' label='Ascendent'></option>
                    <option value='Descendent' label='Descendent'></option>
                </select>

            </div>
            <div>
                <label>Ordenar Países por Continente</label>
                <select onChange={handleContinent}>
                    <option label='Select' value='Continent'></option>
                    <option value='Ascendent' label='Ascendent'></option>
                    <option value='Descendent' label='Descendent'></option>
                </select>

            </div>
        </div>
    )

}


const mapStateToProps = ((state) => {

    return {
        countries: state.countries,
        countriesOrder: state.countriesOrder,
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        orderCountries2: (orderTarget, criteria) => dispatch(orderCountries(orderTarget, criteria)),
        getAllCountries: () => dispatch(getCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesAlphabeticOrder)