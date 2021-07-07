const { Router } = require('express');
const router = Router();
const {postActivities, getActivitiesId} = require('../controllers/activities.js')


router.post('/', postActivities);
router.get('/:id', getActivitiesId);

module.exports = router;