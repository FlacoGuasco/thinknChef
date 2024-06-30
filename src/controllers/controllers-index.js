//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const index = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/index.html'));

module.exports = { index };