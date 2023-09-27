const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
	foodItemName: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	ratings: {
		type: Number,
		min: 0,
		max: 5,
	},
	restaurant_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Inventory',
		required: true,
	},
});

module.exports = mongoose.model('Menu', MenuSchema);
