module.exports = (connection, DataTypes) => {
  const schema = {
    productName: {
      type: DataTypes.STRING,
    },
    productGroup: {
      type: DataTypes.STRING,
    },
    subGroup: {
      type: DataTypes.STRING,
    },
    unitSizeInMl: {
      type: DataTypes.INTEGER,
    },
  };

  const ProductModel = connection.define("Products", schema);

  return ProductModel;
};
