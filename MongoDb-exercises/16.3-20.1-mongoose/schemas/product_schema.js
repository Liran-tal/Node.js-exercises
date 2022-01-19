const mongoose = require("mongoose");
const product_details = require("./product_details_schema");

const product = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	category: {
		type: String,
		required: true
	},
	isActive: Boolean,
	details: product_details
});


module.exports = mongoose.model("Product", product);