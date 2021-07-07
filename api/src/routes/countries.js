const { Router } = require('express');
const router = Router();
const { getAllCountries, getCountriesId, getCountriesName} = require('../controllers/countries')


router.get('/', getAllCountries);
router.get('/:id',getCountriesId);
router.get('/?name=',getCountriesName);


module.exports = router;