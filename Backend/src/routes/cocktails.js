const express = require("express");
const CocktailsController = require("../controllers/cocktails");
const cocktailsRouter = express.Router();

cocktailsRouter.post("/", CocktailsController.createCocktail);

module.exports = cocktailsRouter;
