//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const ayuda = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/ayuda.html'));

module.exports = { ayuda };