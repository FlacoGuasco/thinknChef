const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

//Llamamos a la función que contiene un objeto "express"
const express = require('express');

const indexRouter = require('./src/routes/routes-index');
/* const menuRouter = require('./src/routes/routes-menu');
const contactoRouter = require('./src/routes/routes-contacto');
const nosotrosRouter = require('./src/routes/routes-nosotros');
const ayudaRouter = require('./src/routes/routes-ayuda');
const loginRouter = require('./src/routes/routes.login');
*/
const error404Router = require('./src/routes/routes-error404');

// Instanciamos la función del objeto express
const app = express();

// Middlewares
app.use(express.json());

// Este método sirve para buscar primero en la carpeta 'public', sino, sigue buscando
app.use(express.static(path.join(__dirname, 'public')));

// Usamos el motor de vistas EJS y le indicamos la carpeta donde estan las vistas a usar
/* app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')) */

/* app.use('/', (req, res) => {
    res.send('Todo funcionando OK.')
}) */

app.use('/index', indexRouter);
/*
app.use('/menu', menuRouter);
app.use('/contacto', contactoRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/ayuda', ayudaRouter);
app.use('/login', loginRouter);
*/
app.use(error404Router);

// Verificamos que el server este funcionando
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server funcionando en http://${process.env.HOST}:${process.env.PORT}`);
});