const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require('./countries.js');
const activitiesRoutes = require('./activities.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRoutes);
router.use('/activities', activitiesRoutes);


/* router.get('/', (req, res) =>{
    res.send('Testing')
}) */

module.exports = router;
