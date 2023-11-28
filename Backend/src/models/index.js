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

  connection.sync({ alter: true });

  return Cocktails;
};

module.exports = setupDatabase();
