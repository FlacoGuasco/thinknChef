const express = require('express');
const router = express.Router();

const contactoController = require('../controllers/controllers-contacto');

router.get('/', contactoController.contacto);

module.exports = router;