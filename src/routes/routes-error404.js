const express = require('express');
const router = express.Router();

const error404Controller = require('../controllers/controllers-error404');

router.use(error404Controller.error404);

module.exports = router;