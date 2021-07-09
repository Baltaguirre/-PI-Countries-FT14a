const BASE_URL ='https://restcountries.eu/rest/v2';
const ALL_COUNTRY_URL = BASE_URL + '/all';
const NAME_COUNTRY_URL= BASE_URL + '/name/{name}';
const ID_COUNTRY_URL = BASE_URL + '/alpha/{code}';


module.exports = {
    BASE_URL,
    ALL_COUNTRY_URL, 
    NAME_COUNTRY_URL,
    ID_COUNTRY_URL
}