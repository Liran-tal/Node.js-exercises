const express = require("express");
const Router = express.Router();

const {
	createProduct,
	getProducts,
	getActiveProducts,
	getProductsByPrice,
	toggleProductActive,
	updateProductDiscount,
	deleteProductById,
	deleteAllProducts,
} = require("../controlers/products/products_controlers")


Router.post("/create-product", createProduct);

Router.get("/get-products", getProducts);

Router.get("/get-active-products", getActiveProducts);

Router.get("/get-products-price", getProductsByPrice);

Router.put("/update-product-activation", toggleProductActive);

Router.put("/update-product-discount", updateProductDiscount);

Router.delete("/delete-product", deleteProductById);

Router.delete("/delete-all-products", deleteAllProducts);


module.exports = Router