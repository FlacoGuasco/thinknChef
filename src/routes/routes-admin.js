const express = require('express');
const router = express.Router();

const loginController = require('../controllers/controllers-login');
const adminController = require('../controllers/controllers-admin');

// Ruta para las vistas
router.get('/', loginController.usuarioAuth, adminController.mostrar);
router.post('/guardar', adminController.guardar);
router.post('/actualizar', adminController.actualizar);
router.get('/editar/:id', adminController.buscar);
router.get('/borrar/:id', adminController.borrar);
router.get('/agregar-menu', adminController.agregarMenu);
router.get('/editar-menu', adminController.editarMenu);


module.exports = router;