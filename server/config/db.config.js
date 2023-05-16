const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1",
  database: "carta",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
