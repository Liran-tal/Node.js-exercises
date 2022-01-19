require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const productsRouter = require("./routes/products_routes.js");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/exercise-16_2-blogs");

app.use("/products", productsRouter);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server is running on port: ${PORT}`)
);