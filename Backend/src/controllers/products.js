const {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
} = require("./helpers");

exports.createProduct = (req, res) => createItem(res, "products", req.body);

exports.getAllProducts = (_, res) => getAllItems(res, "products");

exports.getProductById = (req, res) => {
  getItemById(res, "products", req.params.id);
};

exports.updateProductById = (req, res) => {
  updateItemById(res, "products", req.body, req.params.id);
};

exports.deleteProduct = (req, res) => {
  deleteItemById(res, "products", req.params.id);
};
