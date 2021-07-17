const { Router } = require('express');
const router = Router();
const activitiesController = require('../controllers/activities');






router.post('/', activitiesController.postActivities);
router.get('/:name', activitiesController.getActivities);

module.exports = router;