const Cocktails = require("../models");

exports.createCocktail = async (req, res) => {
  const newCocktail = await Cocktails.create(req.body);

  res.status(201).json(newCocktail);
};
