const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../config/db-config');
const { promisify } = require('util');

//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const { error } = require('console');
const register = (req, res) => res.render('register', { alert:false });

// Método para registrarnos
const creaRegister = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.password;

        let passHash = await bcryptjs.hash(password, 8);
        /* console.log(usuario + " - " + email + " - " + password)
        console.log(passHash); */
        if(!usuario || !email || !password) {
            res.render('register', {
               alert: true,
               alertTitle: 'Advertencia',
               alertMessage: 'Debe completar todos los campos',
               alertIcon: 'info',
               showConfirmButton: true,
               timer: false,
               ruta: 'register'
           });
       }else {
            try {
                const sql = 'SELECT * FROM usuarios WHERE usuario = ?';
                db.query(sql, [usuario], async (error, results) => {
                    if(error) throw error;
                    if(results.length == 0){
                        const sql = 'INSERT INTO usuarios (usuario, email, password) VALUES (?, ?, ?)';
                        db.query(sql, [usuario, email, passHash], (error, result) => {
                            if(error) throw error;
                            res.render('register', {
                                alert: true,
                                alertTitle: "Felicidades",
                                alertMessage: "¡USUARIO CREADO!",
                                alertIcon:'success',
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: 'login'
                            }) 
                        })
                    }else {
                        res.render('register', {
                            alert: true,
                            alertTitle: 'Advertencia',
                            alertMessage: 'El usuario ya existe!',
                            alertIcon: 'info',
                            showConfirmButton: true,
                            timer: false,
                            ruta: 'register'
                        });
                    }
                });
            } catch (error) {
                console.log(error);
            }
           /*  const sql = 'INSERT INTO usuarios (usuario, email, password) VALUES (?, ?, ?)';
            db.query(sql, [usuario, email, passHash], (error, result) => {
                if(error) throw error;
                res.render('register', {
                    alert: true,
                    alertTitle: "Felicidades",
                    alertMessage: "¡USUARIO CREADO!",
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'admin'
               }) 
            }) */
        }
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = { register, creaRegister };