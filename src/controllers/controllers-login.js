const db = require('../config/db-config');

//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const login = (req, res) => res.render('login');

// Método para loguearnos
const creaLogin = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const password = req.body.password;
        console.log(usuario);
    } catch (error) {
        
    }
}

module.exports = { login, creaLogin };