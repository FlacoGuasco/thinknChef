const express = require('express');
const router = express.Router();

const loginController = require('../controllers/controllers-login');

// Ruta para las vistas
router.get('/', loginController.login);

// Ruta para los controladores
router.post('/', loginController.creaLogin);

module.exports = router;