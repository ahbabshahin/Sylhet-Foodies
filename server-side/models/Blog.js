const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	restaurant_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Inventory',
		required: true,
	},
});

module.exports = mongoose.model('Blog', BlogSchema);
