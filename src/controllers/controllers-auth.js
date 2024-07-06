const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../config/db-config');
const { promisify } = require('util');

/* // Método para registrarnos
exports.register = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.password;

        let passHash = await bcryptjs.hash(pass, 8);

        //console.log(usuario + " - " + email + " - " + password)
    } catch (error) {
        
    }
} */

/* // Método para loguearnos
exports.login = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const password = req.body.password;
        console.log(usuario);
    } catch (error) {
        
    }
} */

