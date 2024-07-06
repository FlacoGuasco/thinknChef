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

        const sql = 'INSERT INTO usuarios (usuario, email, password) VALUES (?, ?, ?)';
        db.query(sql, [usuario, email, passHash], (error, result) => {
            if(error) throw error;
            res.json({ message: 'Usuario Creado!', id_usuario: result.insertId });  
        })

        
    } catch (err) {
        console.log(err);
    }
}

module.exports = { register, creaRegister };