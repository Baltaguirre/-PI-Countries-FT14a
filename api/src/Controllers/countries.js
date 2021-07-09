const { Country } = require('../db')
const { ModelCrud } = require('./index.js')
const axios = require('axios')
const { BASE_URL, ALL_COUNTRY_URL, NAME_COUNTRY_URL, ID_COUNTRY_URL } = require('../constants')
const { countryProcessor } = require('../utils/index.js')
const { Op } = require("sequelize")

class CountryModel extends ModelCrud {
    constructor(model) {
        super(model);
    }
    getAll = (req, res, next) => {             //traigo todos los paises de la api y los guardo en db
        if (req.query.name) {
            return this.getName(req, res, next)
        }
        this.model.findAll()
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
        return this.model.findByPk(id)
            .then((result) => res.send(result))
            .catch((error) => next(error));

    };
    getName = (req, res, next) => {

        const { name } = req.query
        let procesName = [name, name.toUpperCase(), name.toLowerCase()]
        return this.model.findOne({
            where: {
                name
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