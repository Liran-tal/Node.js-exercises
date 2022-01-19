require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products_routes.js");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server is running on port: ${PORT}`)
);