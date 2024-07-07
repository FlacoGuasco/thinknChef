const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../config/db-config');
const { promisify } = require('util');

//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const login = (req, res) => res.render('login', { alert:false });

// Método para loguearnos
const creaLogin = async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const password = req.body.password;
        console.log(usuario);

        if(!usuario || !password) {
             res.render('login', {
                alert: true,
                alertTitle: 'Advertencia',
                alertMessage: 'Ingrese usuario y contraseña',
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            });
        }else {
            
            const sql = 'SELECT * FROM usuarios WHERE usuario = ?';
            db.query(sql, [usuario], async (err, results) => {
                if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                    res.render('login', {
                        alert: true,
                        alertTitle: 'Error',
                        alertMessage: 'Usuario y/o contraseña incorrectas',
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    });
                }else {
                    // Si ingresa acá, el inicio de sesion esta validado
                    const id = results[0].id;
                    const tokenJWT = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: '10d'
                    })
                    console.log('TOKEN: ' + tokenJWT + ' para el usuario: ' + usuario);
                    
                    // Configuramos las cookies
                    const cookiesOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRA * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', tokenJWT, cookiesOptions)
                   res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: 'admin'
                   })
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}


// Verificamos si el usuario está autenticado
const usuarioAuth = async (req, res, next) => {
    if(req.cookies.jwt){
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
            
            const sql = 'SELECT * FROM usuarios WHERE usuario = ?';
            db.query(sql, [decodificada.id], (err, results) => {
                if(!results) {return next()};
                req.usuario = results[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        }
    }else {
        res.redirect('/login');
    }
}

// Nos deslogueamos
const logout = (req, res)=>{
    res.clearCookie('jwt')   
    return res.redirect('/')
}

module.exports = { login, creaLogin, usuarioAuth , logout};