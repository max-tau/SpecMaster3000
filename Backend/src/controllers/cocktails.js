const { Cocktails, Ingredients } = require("../models");

const {
  createItem,
  getAllItems,
  updateItemById,
  deleteItemById,
} = require("./helpers");

exports.createCocktail = (req, res) => createItem(res, "cocktails", req.body);

exports.getAllCocktails = (_, res) => getAllItems(res, "cocktails");

exports.getCocktailById = async (req, res) => {
  const { id } = req.params;
  const selectedCocktail = await Cocktails.findByPk(id, {
    include: { model: Ingredients, where: { CocktailId: req.params.id } },
  });

  res.status(201).json(selectedCocktail);
};

exports.updateCocktailById = (req, res) =>
  updateItemById(res, "cocktails", req.body, req.params.id);

exports.deleteCocktailById = (req, res) =>
  deleteItemById(res, "cocktails", req.params.id);
