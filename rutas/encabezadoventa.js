const express = require('express');
const router = express.Router();

const encabezadoventaController = require('../controller/encabezadoventaController');
router.get('/', encabezadoventaController.list);
router.post('/', encabezadoventaController.save);
router.delete('/:num_venta', encabezadoventaController.delete);
router.get('/:num_venta', encabezadoventaController.edit);
router.post('/:num_venta', encabezadoventaController.update);

module.exports = router;
