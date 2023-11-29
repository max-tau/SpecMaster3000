module.exports = (connection, DataTypes) => {
  const schema = {
    cocktailName: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
    },
    garnish: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
    },
    glass: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
    },
  };

  const CocktailModel = connection.define("Cocktails", schema);

  return CocktailModel;
};
