const router = require('express').Router();

router.use('/clientes', require('./clientes-rotas'));
router.use('/agencias', require('./agencias-rotas'));

module.exports = router;
