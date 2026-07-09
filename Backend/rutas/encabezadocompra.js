const express = require('express');
const router = express.Router();

const encabezadocompraController = require('../controller/encabezadocompraController');
router.get('/', encabezadocompraController.list);
router.post('/', encabezadocompraController.save);
router.delete('/:num_compra', encabezadocompraController.delete);
router.get('/:num_compra', encabezadocompraController.edit);
router.post('/:num_compra', encabezadocompraController.update);

module.exports = router;
