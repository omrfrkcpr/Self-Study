"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */
// sync():

module.exports = async function () {
  return null;

  /* CLEAR DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* CLEAR DATABASE */
};
