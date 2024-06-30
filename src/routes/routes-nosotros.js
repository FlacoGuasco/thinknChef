const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/controllers-nosotros');

router.get('/', nosotrosController.nosotros);

module.exports = router;