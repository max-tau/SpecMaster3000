module.exports = (connection, DataTypes) => {
  const schema = {
    quantity: {
      type: DataTypes.STRING,
    },
  };

  const IngredientModel = connection.define("Ingredients", schema);

  return IngredientModel;
};
