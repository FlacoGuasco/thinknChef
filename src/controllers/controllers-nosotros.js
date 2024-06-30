const path = require('path');
const nosotros = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/nosotros.html'));

module.exports = { nosotros };