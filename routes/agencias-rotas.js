const express = require('express');
const router = express.Router();
const controllerAgencia = require('../controllers/agenciaController');

router.get('/', controllerAgencia.get);
router.post('/', controllerAgencia.post);
router.put(':id', controllerAgencia.put);
router.delete(':id', controllerAgencia.delete);

module.exports = router;
