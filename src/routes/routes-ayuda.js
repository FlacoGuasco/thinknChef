const express = require('express');
const router = express.Router();

const ayudaController = require('../controllers/controllers-ayuda');

router.get('/', ayudaController.ayuda);

module.exports = router;