const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


const connectionDB = mysql.createConnection({
   /*  host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT */

    host: process.env.HOST || 3000,
    user: process.env.USERNAME || 'cesar',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'thinknChef',
    port: process.env.DB_PORT || 3306
});

connectionDB.connect((err) => {
    if(err){
        console.log('ERROR al conectar a la BD: ', err);
        return;
    };
    console.log('Conexión EXITOSA');
});

module.exports = connectionDB;