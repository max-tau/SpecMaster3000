const express = require("express");
const CocktailsController = require("../controllers/cocktails");
const cocktailsRouter = express.Router();

cocktailsRouter
  .post("/", CocktailsController.createCocktail)
  .get("/", CocktailsController.getAllCocktails)
  .get("/:id", CocktailsController.getCocktailById)
  .patch("/:id", CocktailsController.updateCocktailById)
  .delete("/:id", CocktailsController.deleteCocktailById);

module.exports = cocktailsRouter;
