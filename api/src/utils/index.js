

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

module.exports = {
    countryProcessor, 
    activityProcessor
}