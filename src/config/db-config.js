const mysql = require('mysql2');
require('dotenv').config();


const connectionDB = mysql.createConnection({
    host: process.env.HOST || 'mysql-popotropico.alwaysdata.net',
    user: process.env.USERNAME || '366902',
    password: process.env.PASSWORD || 'cesar25251',
    database: process.env.DATABASE || 'popotropico_thinknchef',
    port: process.env.DB_PORT || 3306

    /* host: 'mysql-popotropico.alwaysdata.net',
    user: '366902',
    password: 'cesar25251',
    database: 'popotropico_thinknchef',
    port: 3306 */
});

connectionDB.connect((err) => {
    if(err){
        console.log('ERROR al conectar a la BD: ', err);
        return;
    };
    console.log('Conexión EXITOSA');
});

module.exports = connectionDB;