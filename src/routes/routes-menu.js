const express = require('express');
const router = express.Router();
const menuController = require('../controllers/controllers-menu');

router.get('/', menuController.menu);
router.get('/allMenu', menuController.getAllMenus);
router.post('/', menuController.createMenu);
router.route('/:id')
	.get(menuController.getMenuById)
	.put(menuController.updateMenu)
	.delete(menuController.deleteMenu);

/* router.get('/', (req, res) => {
	res.json({mensaje: 'Hola desde la ruta MENUS'});
}); */

module.exports = router;