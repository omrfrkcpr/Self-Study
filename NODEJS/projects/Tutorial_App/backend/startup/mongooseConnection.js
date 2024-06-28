"use strict";

const mongoose = require("mongoose");
const { CustomError } = require("../errors/customError");

const mongooseConnection = async () => {
  try {
    // if (!process.env.MONGO_URI) throw new Error("Mongodb uri is required");
    if (!process.env.MONGO_URI)
      throw new CustomError("Mongodb uri is required");
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new CustomError("Mongodb connection is failed");
  }
};

module.exports = { mongooseConnection };
