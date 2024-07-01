"use strict";

const { mongoose } = require("../configs/dbConnection");

module.exports = (req, res) => {
  const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!idIsValid) {
    res.errorStatusCode = 404;
    throw new Error("Id is not valid");
  }
  next();
};
