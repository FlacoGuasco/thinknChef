const db = require('../config/db-config');
const agregarMenu = (req, res) => res.render('agregar-menu', { alert:false });
const editarMenu = (req, res) => res.render('editar-menu', { alert:false });

// Función para MOSTRAR los menu existentes (los muestra en págin principal /admin)
const mostrar = (req, res) => {
   const sql ='SELECT id_menu, nom_menu, nom_estacion, descripcion FROM menus m, estaciones e, tipo_comidas tc WHERE m.id_estacion = e.id_estacion AND m.id_tipo_comida = tc.id_tipo_comida ORDER BY id_menu';
        db.query(sql, (err, results) => {
            if(err) throw err;
            res.render('admin', {results:results});
        });
};

// Función para AGREGAR un menu a la DB
const guardar = (req, res) => {
    try {
        const nom_menu = req.body.nom_menu;
        const estacion = req.body.estacion;
        const tipo_comida = req.body.tipo_comida;
        /* console.log(estacion); */
    
        const sql = 'INSERT INTO menus (nom_menu, id_estacion, id_tipo_comida) VALUES (?, ?, ?)';
        db.query(sql, [nom_menu, estacion, tipo_comida], (error, results) => {
            if(error) throw error;
            res.redirect('/admin');
        });
    } catch (error) {
        console.log(error);
    }
}; 

// Función para BUSCAR un menu según su ID en la DB
const buscar = (req, res) => {
    try {
        const id = req.params.id;
    
        const sql = 'SELECT * FROM menus WHERE id_menu = ?';
        db.query(sql, [id], (error, results) => {
            if(error) throw error;
            res.render('editar-menu', {menu:results[0]});
            /* console.log({menu:results[0].nom_menu}); */
        });
    } catch (error) {
        console.log(error);
    }
};   

// Función para EDITAR un menu de la DB
const actualizar = (req, res) => {
    try {
        const id_menu = req.body.id_menu
        const nom_menu = req.body.nom_menu;
        const estacion = req.body.estacion;
        const tipo_comida = req.body.tipo_comida;
        /* console.log(estacion); */

        const sql = 'UPDATE menus SET nom_menu = ?, id_estacion = ?, id_tipo_comida = ? WHERE id_menu = ?';
        db.query(sql, [nom_menu, estacion, tipo_comida, id_menu], (err, result) => {
            if(err) throw err;
            res.redirect('/admin');
        });
        
    } catch (error) {
        console.log(error);
    }
}

// Función para BORRAR un menu de la DB
const borrar = (req, res) => {
    try {
        const id = req.params.id;
    
        const sql = 'DELETE FROM menus WHERE id_menu = ?';
        db.query(sql, [id], (error, results) => {
            if(error) throw error;
            res.redirect('/admin');

        });
    } catch (error) {
        console.log(error);
    }
}; 



module.exports = { agregarMenu, mostrar, guardar, buscar, editarMenu, actualizar, borrar };