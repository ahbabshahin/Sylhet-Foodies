const express = require('express');
const router = express.Router();
const {
	createMenuItem,
	getAllMenuItems,
	getSingleMenuItem,
	updateMenuItem,
	deleteMenuItem,
} = require('../controllers/menuController');

router.route('/').post(createMenuItem).get(getAllMenuItems);

router
	.route('/:id')
	.get(getSingleMenuItem)
	.put(updateMenuItem)
	.delete(deleteMenuItem);

module.exports = router;
