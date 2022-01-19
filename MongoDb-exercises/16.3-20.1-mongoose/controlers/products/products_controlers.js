const Product = require("../../schemas/product_schema")

const createProduct = async (req, res) => {
	try {
		const newProduct = await new Product(req.body).save();
		res.status(200).send(newProduct);
	} catch (error) {
		res.status(400).send(error)
	}
};


const getProducts = async (req, res) => {
	try {
		const query = req.query.id ? {"_id": req.query.id} : {}
		const res = await Product.find(query);
		res.status(200).send(res);
	} catch (error) {
		res.status(404).send(error);
	}
};


const getActiveProducts = async (req, res) => {
	console.log("getActiveProducts");
	try {
		const res = await Product.find({"isActive": true});
		res.status(200).send(res);
	} catch (error) {
		res.status(400).send(error);
	}
};


const getProductsByPrice = async (req, res) => {

};


const toggleProductActive = async (req, res) => {

};

const updateProductDiscount = async (req, res) => {

};

const deleteProductById = async (req, res) => {
	console.log("deleteProductById");
	try {
		const deletedItem = await Product.deleteOne({"_id": req.query.id});
		res.status(200).send(deletedItem);
	} catch (error) {
		res.status(404).send(error);
	}
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