const { Activity,Country } = require('../db');
const { ModelCrud } = require('./index.js');
const {v4 : uuidv4}= require('uuid')



class ActivityModel extends ModelCrud  {
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
                .then( async (activityCreated) => {
                console.log(activityCreated)
                    await activityCreated.addCountries(req.body.countries)
                return activityCreated
            })
               /*  .then( async (activityCreated) =>{
                 const countryActivity = await Activity.findOne({
                     where: {
                         id: activityCreated.id
                     },
                     include: [Country],
                 })
                return countryActivity;
                
                }) */
                .then((activityCreated) => res.send(activityCreated))
                .catch((error) => next(error));
        }

        
    };
}

const activitiesController = new ActivityModel(Activity);



module.exports = activitiesController;
