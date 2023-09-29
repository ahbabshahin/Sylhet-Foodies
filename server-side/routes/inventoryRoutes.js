const express = require('express');
const router = express.Router();
const {
	createRestaurant,
	getAllRestaurants,
	getSingleRestaurant,
	updateRestaurant,
	deleteRestaurant,
} = require('../controllers/inventoryController');

router.route('/').post(createRestaurant).get(getAllRestaurants);

router
	.route('/:id')
	.get(getSingleRestaurant)
	.put(updateRestaurant)
	.delete(deleteRestaurant);

module.exports = router;
