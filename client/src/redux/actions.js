import axios from 'axios'
import { COUNTRIES_URL } from '../constants.js'

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITY = 'GET_ACTIVITY';

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
        return axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(response => {
                dispatch({
                    type: GET_COUNTRIES_BY_NAME,
                    payload: response.data,
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
                payload: response.data
            })
        })
    }
}

export function getActivity(name){
    return function (dispatch){
        return axios.get(`http://localhost:3001/activities/${name}`)
        .then((response) => {
            dispatch({
                type: GET_ACTIVITY,
                payload: response.data
            })
        }) 
    }
}