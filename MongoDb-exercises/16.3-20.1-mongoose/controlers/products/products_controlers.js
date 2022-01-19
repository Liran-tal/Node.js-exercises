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
		const products = await Product.find(query);
		res.status(200).send(products);
	} catch (error) {
		res.status(404).send(error);
	}
};


const getActiveProducts = async (req, res) => {
	try {
		const products = await Product.find({$isActive: true});
		res.status(200).send(products);
	} catch (error) {
		res.status(400).send(error);
	}
};


const getProductsByPrice = async (req, res) => {
	const {min, max} = req.query;
	console.log(min, max);
	try {
		console.log(Product);
		const products = await Product.details.find(
			{price: {$gte: min}, price: {$lt: max}}
		);
		console.log(products);
		res.status(200).send(products);
	} catch (error) {
		res.status(400).send(error);
	}
};


const toggleProductActive = async (req, res) => {
	console.log("toggleProductActive");
	console.log(req.query.id);
	try {
		const product = await Product.findOneAndUpdate(
			{$isActive: req.query.id}, {$isActive: !$isActive}, {"options.new": true}
		);
		res.status(200).send(product);
	} catch (error) {
		res.status(400).send(error);
	}
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