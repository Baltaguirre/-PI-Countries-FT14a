const { Activity, Country } = require('../db');
const { ModelCrud } = require('./index.js');
const { v4: uuidv4 } = require('uuid')



class ActivityModel extends ModelCrud {
    constructor(model) {
        super(model);
    }
    postActivities = (req, res, next) => {
        const { name, dificulty, season, duration } = req.body;
        if (!name || !dificulty || !season || !duration) {
            res.status(404).send('Debes ingresar todas propiedades');
        } else {
           
            const newActivity = req.body;
            return this.model.create({
                ...newActivity,
                id: uuidv4(),
               
            },
            )
                .then(async (activityCreated) => {
                    await activityCreated.addCountries(req.body.countries)
                    console.log(activityCreated)
                    return activityCreated
                })

                .then((activityCreated) => res.send(activityCreated))
                .catch((error) => next(error));
        }
    };

    getActivities = (req, res, next) => {
        const { name } = req.params
        const upName = name.replace(/\b\w/g, l => l.toUpperCase())
        return this.model.findOne({
            where: { name },
            include: Country
        })
            .then((result) => {
                if (!result) {
                    res.status(404).send('Actividad no encontrada')
                } else {
                    return res.status(200).send(result)
                }
            })
            .catch((error => next(error)))
    }
}

const activitiesController = new ActivityModel(Activity);



module.exports = activitiesController;
