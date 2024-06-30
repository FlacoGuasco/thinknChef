const express = require('express');
const router = express.Router();

const loginController = require('../controllers/controllers-login');

router.get('/', loginController.login);

module.exports = router;