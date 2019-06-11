const express = require('express');
const router = express.Router();
const controllerCliente = require('../controllers/clientesController');

router.get('/', controllerCliente.get);
router.post('/', controllerCliente.post);
// router.put(':id', controllerCliente.put);
// router.delete(':id', controllerCliente.delete);

module.exports = router;
