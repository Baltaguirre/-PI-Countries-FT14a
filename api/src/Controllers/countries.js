const { Country, Activity } = require('../db')
const { ModelCrud } = require('./index.js')
const axios = require('axios')
const { BASE_URL, ALL_COUNTRY_URL, NAME_COUNTRY_URL, ID_COUNTRY_URL } = require('../constants')
const { countryProcessor } = require('../utils/index.js')
const { Op } = require("sequelize")

class CountryModel extends ModelCrud {
    constructor(model) {
        super(model);
    }
    //traigo todos los paises de la db
    getAll = (req, res, next) => {   
        //de paso hago la ruta del name         
        if (req.query.name) {
            return this.getName(req, res, next)  
        }
        this.model.findAll({include: Activity})
            .then((result) => {
                
                if (!result.length) {
                    res.status(404).send('Los paises no fueron encontrados')

                } else {
                    res.status(200).send(result)
                }
            })
            .catch((err) => { err })

    };



    getId = (req, res, next) => {
        const id = req.params.id;
        return this.model.findByPk(id, {include: Activity})
            .then((result) => res.send(result))
            .catch((error) => next(error));

    };
    getName = (req, res, next) => {
        //hago que matchee mayúsculas y minúsculas
        const { name } = req.query
        let capitalizeFirst =  name.charAt(0).toUpperCase()
        let finalName = capitalizeFirst + name.slice(1)
        return this.model.findOne({
            where : {
                 name : finalName
             },
          })
         .then((result) => {
                if (!result) {

                    res.status(404).send('El pais no fue encontrado')

                } else {
                    return res.status(200).send(result)
                }
            })
            .catch((error => next(error)))



    };
}

const countriesController = new CountryModel(Country);


module.exports = countriesController;