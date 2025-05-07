const express = require('express');
const router = express.Router();
const comunidadesUsuariosController = require('../controllers/comunidadesUsuariosController');

router.post('/', comunidadesUsuariosController.createComunidadeUsuario);
router.get('/', comunidadesUsuariosController.getAllComunidadesUsuarios);
router.get('/:id', comunidadesUsuariosController.getComunidadeUsuarioById);
router.put('/:id', comunidadesUsuariosController.updateComunidadeUsuario);
router.delete('/:id', comunidadesUsuariosController.deleteComunidadeUsuario);

module.exports = router;
