const axios = require('axios')
const ALL_COUNTRY_URL = require('../constants')
function countryProcessor(country) {
    return {
        name: country.name,
        id: country.alpha3Code,
        flag: country.flag,
        continent: country.region,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        
        
    };
};

function activityProcessor(element){
    return {
        id: element.id,
        name: element.name,
        season: element.season,
        duration: element.duration,
        dificulty: element.dificulty

    };
}; 
//lleno la db con todos los paises de la api 
const bulkCreateCountry = () => {
    return axios.get(ALL_COUNTRY_URL)
      .then((result) => {
        let response = result.data.map(el => {
          return countryProcessor(el)
        })
        return Country.bulkCreate(response)
      })
  }

module.exports = {
    countryProcessor, 
    activityProcessor,
    bulkCreateCountry
}