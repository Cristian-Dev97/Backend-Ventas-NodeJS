const express = require('express');
const router = express.Router();

const detalleventaController = require('../controller/detalleventaController');
router.get('/', detalleventaController.list);
router.post('/', detalleventaController.save);
router.delete('/:iddetventa', detalleventaController.delete);
router.get('/:iddetventa', detalleventaController.edit);
router.post('/:iddetventa', detalleventaController.update);

module.exports = router;
