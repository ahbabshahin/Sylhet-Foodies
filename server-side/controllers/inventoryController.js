const Inventory = require('../models/Inventory');

const createRestaurant = async (req, res) => {
	try {
		const {
			restaurantName,
			contacts,
			bKashNumber,
			address,
			openingTime,
			user_id,
		} = req.body;

		const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
		if (!phoneRegex.test(contacts) || !phoneRegex.test(bKashNumber)) {
			return res.status(400).json({
				message:
					'Please enter a valid phone number in the format XXX-XXX-XXXX.',
			});
		}

		const newRestaurant = new Inventory({
			restaurantName,
			contacts,
			bKashNumber,
			address,
			openingTime,
			user_id,
		});

		await newRestaurant.save();

		res.status(201).json({ message: 'Restaurant created successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Inventory.find();

		res.json(restaurants);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

const getSingleRestaurant = async (req, res) => {
	try {
		const restaurantId = req.params.id;

		const restaurant = await Inventory.findById(restaurantId);

		if (!restaurant) {
			return res.status(404).json({ message: 'Restaurant not found' });
		}

		res.json(restaurant);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

const updateRestaurant = async (req, res) => {
	try {
		const restaurantId = req.params.id;
		const updatedData = req.body;

		const restaurant = await Inventory.findByIdAndUpdate(
			restaurantId,
			updatedData,
			{
				new: true,
			}
		);

		if (!restaurant) {
			return res.status(404).json({ message: 'Restaurant not found' });
		}

		res.json(restaurant);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

const deleteRestaurant = async (req, res) => {
	try {
		const restaurantId = req.params.id;

		const restaurant = await Inventory.findByIdAndRemove(restaurantId);

		if (!restaurant) {
			return res.status(404).json({ message: 'Restaurant not found' });
		}

		res.json({ message: 'Restaurant deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	createRestaurant,
	getAllRestaurants,
	getSingleRestaurant,
	updateRestaurant,
	deleteRestaurant,
};
