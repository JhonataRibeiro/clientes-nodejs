const express = require('express');
const router = express.Router();
const controllerAgencia = require('../controllers/agenciaController');

router.get('/', controllerAgencia.get);
router.get('/:id', controllerAgencia.get);
router.post('/', controllerAgencia.post);
router.put('/:id', controllerAgencia.put);
router.delete('/:id', controllerAgencia.excluir);

module.exports = router;
