const express = require("express");
const Router = express.Router();

const {
	createProduct,
	getProducts,
	getProducts,
	getActiveProducts,
	getProductsByPrice,
	toggleProductActive,
	deleteProductById,
	deleteAllProducts,
} = require("../controlers/products/products_controlers")

Router.post("/create-product", createProduct);

Router.get("/get-all-products", getProducts);

Router.get("/get-product/:id", getProducts);

Router.get("/get-active-products", getActiveProducts);

Router.get("/get-products-price", getProductsByPrice);

Router.put("/update-product-activation", toggleProductActive);

Router.put("/update-product-discount", updateProductDiscount);

Router.delete("delete-product/:id", deleteProductById);

Router.delete("delete-all-products", deleteAllProducts);


module.exports = Router