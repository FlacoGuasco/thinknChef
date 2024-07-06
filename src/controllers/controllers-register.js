const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../config/db-config');
const { promisify } = require('util');

//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const { error } = require('console');
const register = (req, res) => res.render('register');

// Método para registrarnos
const creaRegister = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.password;

        let passHash = await bcryptjs.hash(password, 8);
        /* console.log(usuario + " - " + email + " - " + password)
        console.log(passHash); */

        db.query('INSERT INTO usuarios SET ?', {usuario:usuario, email:email, password:passHash}, (err, res) => {
            if(err) {console.log(err)};
            res.send('correcto');    
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { register, creaRegister };