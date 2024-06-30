//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const error404 = (req, res, next) => res.status(404).sendFile(path.resolve(__dirname, '../../public/pages/error404.html'));

module.exports = { error404 };