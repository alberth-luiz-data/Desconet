const express = require('express');
const router = express.Router();
const desafiosController = require('../controllers/desafiosController');

router.post('/', desafiosController.createDesafio);
router.get('/', desafiosController.getAllDesafios);
router.get('/:id', desafiosController.getDesafioById);
router.put('/:id', desafiosController.updateDesafio);
router.delete('/:id', desafiosController.deleteDesafio);

module.exports = router;
