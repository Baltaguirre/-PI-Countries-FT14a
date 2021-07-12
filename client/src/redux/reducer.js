import { GET_COUNTRIES,
         GET_COUNTRIES_BY_NAME,
         GET_COUNTRY_DETAIL } from './actions.js'

const initialState = {
    countries: [],
    country: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                country: action.payload,
            };
            case GET_COUNTRY_DETAIL:
                return {
                    ...state,
                    country: action.payload,
                }    
        default:
            return {
                ...state
            }
    }
}


export default reducer;