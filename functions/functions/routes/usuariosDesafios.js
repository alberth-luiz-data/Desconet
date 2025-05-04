const express = require('express');
const router = express.Router();
const usuariosDesafiosController = require('../controllers/usuariosDesafiosController');

router.post('/', usuariosDesafiosController.createUsuarioDesafio);
router.get('/', usuariosDesafiosController.getAllUsuariosDesafios);
router.get('/:id', usuariosDesafiosController.getUsuarioDesafioById);
router.put('/:id', usuariosDesafiosController.updateUsuarioDesafio);
router.delete('/:id', usuariosDesafiosController.deleteUsuarioDesafio);

module.exports = router;
