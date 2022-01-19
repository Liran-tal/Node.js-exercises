const Product = require("../../schemas/product_schema")

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/exercise-16_2-blogs");

const createProduct = async (req, res) => {
	
};


const getProducts = async (req, res) => {
	res.send(await Product.find());
};


const getActiveProducts = async (req, res) => {

};


const getProductsByPrice = async (req, res) => {

};


const toggleProductActive = async (req, res) => {

};

const updateProductDiscount = async (req, res) => {

};

const deleteProductById = async (req, res) => {

};


const deleteAllProducts = async (req, res) => {

};



module.exports = {
	createProduct,
	getProducts,
	getProducts,
	getActiveProducts,
	getProductsByPrice,
	toggleProductActive,
	updateProductDiscount,
	deleteProductById,
	deleteAllProducts,
};