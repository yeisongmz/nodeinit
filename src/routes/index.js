const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/controllers.index')


router.use('/users', controllers.getUsers);
router.use('/clients', controllers.getClients);

module.exports =  router;