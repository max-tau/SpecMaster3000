const express = require("express");
const ProductsController = require("../controllers/products");
const productsRouter = express.Router();

productsRouter.post("/", ProductsController.createProduct);

module.exports = productsRouter;
