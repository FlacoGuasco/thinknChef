//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const login = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/login.html'));

module.exports = { login };