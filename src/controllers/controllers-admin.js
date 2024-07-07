//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const admin = (req, res) => res.render('admin');

module.exports = { admin };