const express = require('express');
const router = express.Router();

const cxpagarController = require('../controller/cxpagarController');
router.get('/', cxpagarController.list);
router.post('/', cxpagarController.save);
router.delete('/:idcxp', cxpagarController.delete);
router.get('/:idcxp', cxpagarController.edit);
router.post('/:idcxp', cxpagarController.update);

module.exports = router;
