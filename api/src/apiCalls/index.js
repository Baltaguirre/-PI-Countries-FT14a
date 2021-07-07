const axios = require('axios');
const {countryProcessor, activityProcessor} = require('../utils');


async function allApiCall(){ //hago consulta a la api y me traigo todos los resultados
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const result = response.data.map((country) => countryProcessor(country));
        
        return result.slice(1,11)
    } catch(error){
        console.error(error);
    }

}

async function nameApiCall(name){ //hago consulta por nombre
    try{
        const response = await axios.get( `https://restcountries.eu/rest/v2/name/${name}`);
        return response.data.map((country) => countryProcessor(country))
    }
    catch(error){}
}



module.exports = {
    allApiCall, 
    nameApiCall,

};