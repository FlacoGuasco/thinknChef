const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');

//Llamamos a la función que contiene un objeto "express"
const express = require('express');

const indexRouter = require('./src/routes/routes-index');
const contactoRouter = require('./src/routes/routes-contacto');
const nosotrosRouter = require('./src/routes/routes-nosotros');
const ayudaRouter = require('./src/routes/routes-ayuda');
const loginRouter = require('./src/routes/routes-login');
const registerRouter = require('./src/routes/routes-register');
const menuRouter = require('./src/routes/routes-menu');
const adminRouter = require('./src/routes/routes-admin');
const error404Router = require('./src/routes/routes-error404');

// Instanciamos la función del objeto express
const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Módulo para crear layouts
const layouts = require('express-ejs-layouts');

// Este método sirve para buscar primero en la carpeta 'public', sino, sigue buscando
app.use(express.static(path.join(__dirname, 'public')));

// Usamos el motor de vistas EJS y le indicamos la carpeta donde estan las vistas a usar
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'))



// Seteamos para trabajar con las cookies
app.use(cookieParser());

// Llamado a las rutas
app.use('/index', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/ayuda', ayudaRouter);
app.use('/login', loginRouter);
app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/menu', menuRouter);
app.use('/admin', adminRouter);
app.use('/', adminRouter);
app.use(error404Router);

// Verificamos que el server este funcionando
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server funcionando en http://${process.env.HOST}:${process.env.PORT}`);
});