const express = require('express');
const router = express.Router();

const loginController = require('../controllers/controllers-login');
const adminController = require('../controllers/controllers-admin');

// Ruta para las vistas
router.get('/', loginController.usuarioAuth, adminController.admin);

module.exports = router;