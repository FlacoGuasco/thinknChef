const mysql = require('mysql2');
require('dotenv').config();


const connectionDB = mysql.createConnection({
    /* host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT */

    host: 'mysql-popotropico.alwaysdata.net',
    user: '366902',
    password: 'cesar25251',
    database: 'popotropico_thinknchef',
    port: 3306
});

connectionDB.connect((err) => {
    if(err){
        console.log('ERROR al conectar a la BD: ', err);
        return;
    };
    console.log('Conexión EXITOSA');
});

module.exports = connectionDB;