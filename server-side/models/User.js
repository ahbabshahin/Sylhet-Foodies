const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		match: /^\S+@\S+\.\S+$/,
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				const regex =
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
				return regex.test(value);
			},
			message:
				'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.',
		},
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
});

UserSchema.pre('save', async function () {
	if (!this.isModified('password')) return;

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model('User', UserSchema);
