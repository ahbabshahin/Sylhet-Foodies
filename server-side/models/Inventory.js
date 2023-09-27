const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
	restaurantName: {
		type: String,
		required: true,
		trim: true,
	},
	contacts: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value);
			},
			message:
				'Please enter a valid phone number in the format XXX-XXX-XXXX.',
		},
	},
	bKashNumber: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value);
			},
			message:
				'Please enter a valid phone number in the format XXX-XXX-XXXX.',
		},
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	openingTime: {
		type: Date,
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

module.exports = mongoose.model('Inventory', InventorySchema);
