//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const contacto = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/contacto.html'));

module.exports = { contacto };