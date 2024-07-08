"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
      unique: true,
    },
    token: {
      type: String,
      trim: true,
      index: true,
      required: true,
      unique: true,
    },
  },
  { collection: "tokens", timestamps: false }
);

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
