const express = require('express');
const router = express.Router();
const comunidadeController = require('../controllers/comunidadeController');

router.post('/', comunidadeController.createComunidade);
router.get('/', comunidadeController.getAllComunidades);
router.get('/:id', comunidadeController.getComunidadeById);
router.put('/:id', comunidadeController.updateComunidade);
router.delete('/:id', comunidadeController.deleteComunidade);

module.exports = router;
