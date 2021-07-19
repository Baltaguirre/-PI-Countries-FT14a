import axios from 'axios'
import { COUNTRIES_URL } from '../constants.js'
import { countriesOrder, filterContinentActivity } from '../utils'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';


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

export function getCountryDetail(id) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/countries/${id}`)
            .then((response) => {

                dispatch({
                    type: GET_COUNTRY_DETAIL,
                    payload: response.data
                })
            })
    }
}

export function getActivity(name) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/activities/${name}`)
            .then((response) => {
                dispatch({
                    type: GET_ACTIVITY,
                    payload: response.data
                })
            })
    }
}
export function getAllActivities() {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/activities/`)
            .then((response) => {
               console.log(response)
                dispatch({
                    type: GET_ALL_ACTIVITIES,
                    payload: response.data
                })
            })
    }
}
export function postActivity(activity) {
    return function (dispatch) {
        return axios.post(`http://localhost:3001/activities`, activity)
            .then((response) => {
                dispatch({
                    type: POST_ACTIVITY,
                    payload: response.data
                })
            })
    }
}
export function orderCountries(orderTarget, criteria) {
    return async function (dispatch) {
         countriesOrder(orderTarget, criteria)
        .then((orderTarget) => {
               
            return dispatch({
                    type: ORDER_COUNTRIES,
                    payload: orderTarget,
                })
            })
    }
}
export function filterCountries(orderTarget, criteria) {
    return async function (dispatch) {
        filterContinentActivity(orderTarget, criteria)
        .then((orderTarget) => {
               
            return dispatch({
                    type: FILTER_COUNTRIES,
                    payload: orderTarget,
                })
            })
    }
}