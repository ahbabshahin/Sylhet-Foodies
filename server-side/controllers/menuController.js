const Menu = require('../models/Menu');
const { StatusCodes } = require('http-status-codes');
const createMenuItem = async (req, res) => {
	try {
		const { foodItemName, price, description, ratings, restaurant_id } =
			req.body;

		const newMenuItem = new Menu({
			foodItemName,
			price,
			description,
			ratings,
			restaurant_id,
		});

		await newMenuItem.save();

		res.status(StatusCodes.CREATED).json({
			message: 'Menu item created successfully',
		});
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const getAllMenuItems = async (req, res) => {
	try {
		const menuItems = await Menu.find();

		res.json(menuItems);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const getSingleMenuItem = async (req, res) => {
	try {
		const menuItemId = req.params.id;

		const menuItem = await Menu.findById(menuItemId);

		if (!menuItem) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Menu item not found' });
		}

		res.json(menuItem);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const updateMenuItem = async (req, res) => {
	try {
		const menuItemId = req.params.id;
		const updatedData = req.body;

		const menuItem = await Menu.findByIdAndUpdate(menuItemId, updatedData, {
			new: true,
		});

		if (!menuItem) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Menu item not found' });
		}

		res.json(menuItem);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const deleteMenuItem = async (req, res) => {
	try {
		const menuItemId = req.params.id;

		const menuItem = await Menu.findByIdAndRemove(menuItemId);

		if (!menuItem) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Menu item not found' });
		}

		res.json({ message: 'Menu item deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

module.exports = {
	createMenuItem,
	getAllMenuItems,
	getSingleMenuItem,
	updateMenuItem,
	deleteMenuItem,
};
