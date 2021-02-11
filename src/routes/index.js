const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/controllers.index')


router.use('/usuarios', controllers.getUsers);
router.use('/clientes', controllers.getClients);

module.exports =  router;