const express = require("express");
const ProductsController = require("../controllers/products");
const productsRouter = express.Router();

productsRouter
  .post("/", ProductsController.createProduct)
  .get("/", ProductsController.getAllProducts)
  .delete("/:id", ProductsController.deleteProduct);

module.exports = productsRouter;
