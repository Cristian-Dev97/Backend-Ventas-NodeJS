const express = require('express');
const router = express.Router();

const detallecompraController = require('../controller/detallecompraController');
router.get('/', detallecompraController.list);
router.post('/', detallecompraController.save);
router.delete('/:iddetcomp', detallecompraController.delete);
router.get('/:iddetcomp', detallecompraController.edit);
router.post('/:iddetcomp', detallecompraController.update);

module.exports = router;
