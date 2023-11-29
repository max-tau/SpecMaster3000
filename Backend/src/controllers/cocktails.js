const Cocktails = require("../models");
const {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
} = require("./helpers");

exports.createCocktail = (req, res) => {
  createItem(res, "cocktails", req.body);
};

exports.getAllCocktails = (_, res) => {
  getAllItems(res, "cocktails");
};

exports.getCocktailById = (req, res) => {
  getItemById(res, "cocktails", req.params.id);
};

exports.updateCocktailById = (req, res) => {
  updateItemById(res, "cocktails", req.body, req.params.id);
};

exports.deleteCocktailById = (req, res) => {
  deleteItemById(res, "cocktails", req.params.id);
};
