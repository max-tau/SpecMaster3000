const { Cocktails, Ingredients, Products } = require("../models");

const { createItem, updateItemById, deleteItemById } = require("./helpers");

exports.createIngredient = (req, res) =>
  createItem(res, "ingredients", req.body);

exports.getAllIngredients = async (_, res) => {
  const itemList = await Ingredients.findAll({
    include: [Cocktails, Products],
  });

  res.status(200).json(itemList);
};

exports.updateIngredientById = (req, res) =>
  updateItemById(res, "ingredients", req.body, req.params.id);

exports.deleteIngredientById = (req, res) =>
  deleteItemById(res, "ingredients", req.params.id);
