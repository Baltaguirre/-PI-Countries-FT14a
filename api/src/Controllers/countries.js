const { Country} = require('../db')
const {allApiCall, nameApiCall} = require('../apiCalls')
const { Op } = require("sequelize")


function getAllCountries (req, res, next) {
    return Country.findAll()
    .then((country) => res.send(country))
    .catch((error) => next(error))
};

function getCountriesId (req, res, next)  {
    const id = req.params.id
     return Country.findByPk(id)
    .then((country) => res.send(country))
    .catch((error) => next(error))
    
    };

    function getCountriesName (req, res, next)  {
        const {name} = req.query
         return Country.findAll({
             where: {
                 name
                }
         })
        .then((country) => res.send(country))
        .catch((error) => next(error))
        
        };
    module.exports ={
        getAllCountries, 
        getCountriesId,
        getCountriesName
    }