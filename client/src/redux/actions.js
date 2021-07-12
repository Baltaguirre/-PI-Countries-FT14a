import axios from 'axios'
import { COUNTRIES_URL, NAME_COUNTRY_URL } from '../constants.js'

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';


export function getCountries() {
    return function (dispatch) {
        return axios.get(COUNTRIES_URL)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
            })
    }
}

export function getCountryByName(name) {
    return function (dispatch) {
        return axios.get(NAME_COUNTRY_URL + name)
            .then(response => {
                dispatch({
                    type: GET_COUNTRIES_BY_NAME,
                    payload: response,
                })
            })
    }
}

export function getCountryDetail(id){
    return function (dispatch) {
        return axios.get(`http://localhost:3001/countries/${id}`)
        .then((response) => {
            
            dispatch({
                type:GET_COUNTRY_DETAIL,
                payload: response
            })
        })
    }
}