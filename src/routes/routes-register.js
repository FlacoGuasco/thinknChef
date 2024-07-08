const express = require('express');
const router = express.Router();

const loginController = require('../controllers/controllers-register');

// Ruta para las vistas
router.get('/', loginController.register);

// Ruta para los controladores
router.post('/', loginController.creaRegister);

module.exports = router;