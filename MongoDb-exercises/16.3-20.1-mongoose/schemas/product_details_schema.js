const mongoose = require("mongoose");

const product_details = new mongoose.Schema({
	description: {
		type: String,
		required: true,
		minlength: 10,
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	discount: {
		type: Number,
		default: 0
	},
	images: {
		type: Array,
		minlength: 2
	},
	phone: {
		type: String,
		validate: {
			validator: function(v) {
				return /0\d{1,2}-\d{3}-\d{4}/.test(v);
			},
			message: props => `${props.value} is not a valid phone number!`
		},
		required: [true, 'User phone number required']
	},
	DateAdded: {
		type: Date,
		immutable: true,
		default: () => Date.now()
	}
});

module.exports = product_details;