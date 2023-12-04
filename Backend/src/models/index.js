const { Sequelize, DataTypes } = require("sequelize");
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    logging: false,
  });

  const Cocktails = require("./cocktails")(connection, DataTypes);
  const Products = require("./products")(connection, DataTypes);
  const Ingredients = require("./ingredients")(connection, DataTypes);

  Cocktails.hasMany(Ingredients);
  Ingredients.belongsTo(Cocktails);
  Ingredients.hasOne(Products, { foreignKey: "id" });

  connection.sync({ alter: true });

  return { Cocktails, Products, Ingredients };
};

module.exports = setupDatabase();
