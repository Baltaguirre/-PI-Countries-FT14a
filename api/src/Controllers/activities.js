const {Activity} = require('../db.js')
const {v4 : uuidv4} = require('uuid')

function postActivities(req, res, next) {
    const newActivity = req.body;
    return Activity.create({
        ...newActivity,
        Id: uuidv4()
    })
        .then((activityCreated) => res.send(activityCreated))
        .catch((error) => next(error))
    };

    function getActivitiesId (req, res, next)  {
        const id = req.params.id
         return Activity.findByPk(id)
        .then((foundActivity) => res.send(foundActivity))
        .catch((error) => next(error))
    }
    
    
    module.exports = {
        postActivities,
        getActivitiesId
    }