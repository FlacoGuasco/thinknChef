const db = require('../config/db-config');

//El módulo Path nos permite resolver rutas absolutas
const path = require('path');
const menu = (req, res) => res.sendFile(path.resolve(__dirname, '../../public/pages/menu.html'));
const getAllMenus = async (req, res) => {
    const sql ='SELECT nom_menu, nom_estacion, descripcion FROM menus m, estaciones e, tipo_comidas tc WHERE m.id_estacion = e.id_estacion AND m.id_tipo_comida = tc.id_tipo_comida';
    db.query(sql, (err, menus) => {
        if(err) throw err;
        res.render('views-menu' ,{menus});
      
    });
};

const getMenuById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM menus WHERE id_menu = ?';
    db.query(sql, [id], (err, menus) => {
        if(err) throw err;
        res.render('admin', {menus});
    });
};

const createMenu = (req, res) => {
    const { nom_menu, id_estacion, id_tipo_comida } = req.body;
    const sql = 'INSERT INTO menus (nom_menu, id_estacion, id_tipo_comida) VALUES (?, ?, ?)';
        db.query(sql, [nom_menu, id_estacion, id_tipo_comida], (err, result) => {
        if(err) throw err;
        res.json({ message: 'Menú creado!', id_menu: result.insertId });
    });
};

const updateMenu = (req, res) => {
    const { id } =req.params;
    const { nom_menu, id_estacion, id_tipo_comida } = req.body;
    const sql = 'UPDATE menus SET nom_menu = ?, id_estacion = ?, id_tipo_comida = ? WHERE id_menu = ?';
    db.query(sql, [nom_menu, id_estacion, id_tipo_comida, id], (err, result) => {
        if(err) throw err;
        res.json({ message: 'Menú modificado!' });
    });
};

const deleteMenu = (req, res) => {
    const { id } =req.params;
    const sql = 'DELETE FROM menus WHERE id_menu = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Menu eliminado'});
    });
};

module.exports = { menu, getAllMenus, getMenuById, createMenu, updateMenu, deleteMenu };
