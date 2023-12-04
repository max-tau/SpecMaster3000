module.exports = (connection, DataTypes) => {
  const schema = {
    product_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.STRING,
    },
  };

  const IngredientModel = connection.define("Ingredients", schema);

  return IngredientModel;
};
