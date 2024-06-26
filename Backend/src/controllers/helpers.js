const { Cocktails, Ingredients, Products } = require("../models");

const getModel = (model) => {
  const models = {
    cocktails: Cocktails,
    ingredients: Ingredients,
    products: Products,
  };

  return models[model];
};

const get404error = (model) => ({
  error: `The ${model} could not be found.`,
});

exports.createItem = async (res, model, item) => {
  const Model = getModel(model);
  try {
    const newItem = await Model.create(item);

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllItems = async (res, model) => {
  const Model = getModel(model);

  const itemList = await Model.findAll();

  res.status(200).json(itemList);
};

exports.getItemById = async (res, model, id) => {
  const Model = getModel(model);

  const selectedItem = await Model.findByPk(id);

  res.status(200).json(selectedItem);
};

exports.updateItemById = async (res, model, item, id) => {
  const Model = getModel(model);

  const [updatedItems] = await Model.update(item, {
    where: { id },
  });

  if (!updatedItems) {
    res.status(404).json(get404error(model));
  } else {
    const updatedItem = await Model.findByPk(id);

    res.status(200).json(updatedItem);
  }
};

exports.deleteItemById = async (res, model, id) => {
  const Model = getModel(model);

  const deletedItem = await Model.destroy({ where: { id } });

  if (!deletedItem) {
    res.status(404).json(get404error(model));
  } else {
    res.status(204).send();
  }
};
