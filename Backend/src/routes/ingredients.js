const express = require("express");
const IngredientsController = require("../controllers/ingredients");
const ingredientsRouter = express.Router();

ingredientsRouter
  .post("/", IngredientsController.createIngredient)
  .get("/", IngredientsController.getAllIngredients)
  .patch("/:id", IngredientsController.updateIngredientById)
  .delete("/:id", IngredientsController.deleteIngredientById);

module.exports = ingredientsRouter;
