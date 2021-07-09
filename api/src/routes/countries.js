const { Router } = require('express');
const router = Router();
const countriesController = require('../controllers/countries');


router.get('/', countriesController.getAll);
router.get('/:id', countriesController.getId);



module.exports = router;