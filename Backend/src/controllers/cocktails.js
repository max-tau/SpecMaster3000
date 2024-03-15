const { Cocktails, Ingredients, Products } = require("../models");

const {
  createItem,
  getAllItems,
  updateItemById,
  deleteItemById,
  getItemById,
} = require("./helpers");

exports.createCocktail = (req, res) => createItem(res, "cocktails", req.body);

exports.getAllCocktails = (_, res) => getAllItems(res, "cocktails");

// exports.getCocktailById = (req, res) =>
//   getItemById(res, "cocktails", req.params.id);

exports.getCocktailById = async (req, res) => {
  const selectedCocktail = await Cocktails.findByPk(req.params.id, {
    include: {
      model: Ingredients,
      where: { CocktailId: req.params.id },
      include: [Products],
    },
  });

  res.status(200).json(selectedCocktail);
};

exports.updateCocktailById = (req, res) =>
  updateItemById(res, "cocktails", req.body, req.params.id);

exports.deleteCocktailById = (req, res) =>
  deleteItemById(res, "cocktails", req.params.id);
