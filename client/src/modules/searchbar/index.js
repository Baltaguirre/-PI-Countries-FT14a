import React from 'react';
import { useState } from 'react';
import { getCountryByName } from '../../redux/actions.js';
import { connect } from 'react-redux';
import styles from './styles.module.css'
import CountryName from '../countriesCards/name/countryName'

function SearchBar({country, getCountryByName}) {
    const[formActualState, setFormActualState] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)
    const[countryNameButtonClose, setCountryNameButtonClose] = useState(true)


    function handleCountryNameButtonClose(){
        setCountryNameButtonClose(false)
    }
   
    function handleButtonClick() {
        setButtonClicked(true)
        setCountryNameButtonClose(true)
   }
    function handleChange(event){
        setFormActualState(event.target.value)
    }

    function handleSubmit(event){
        
        getCountryByName(formActualState)
        event.preventDefault()
       
    
    
    
    }
        
      
    return (
    
        <div>
            <form  onSubmit={handleSubmit}>
                <input className={styles.searchCountry}
                type="text"
                placeholder="Name (ex: Argentina, Brazil...)"
                value={formActualState}
                onChange={handleChange}
                ></input>
               
                <button className={styles.btn}
                onClick={() => handleButtonClick()}
                type="submit">BUSCAR PAÍS!
                </button>
                {buttonClicked ? <CountryName
                name={country.name}
                id={country.id}
                flag={country.flag}
                population={country.population}
                continent={country.continent}
                onClose={handleCountryNameButtonClose}
                countryNameButtonClose={countryNameButtonClose}
                /> : null}
               
            </form>
        </div>
    
        
    )
}


const mapStateToProps = (state) => {
    return{
        country: state.country,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCountryByName: name => {
            dispatch(getCountryByName(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)