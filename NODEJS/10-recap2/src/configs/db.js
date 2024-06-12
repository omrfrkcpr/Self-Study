("use strict");

//* db connect

const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("sqlite:./db.sqlite3"); // Example for sqlite

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
})();

module.exports = { sequelize };
