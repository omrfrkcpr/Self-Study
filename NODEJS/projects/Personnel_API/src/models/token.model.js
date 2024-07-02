"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

const TokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Personnel",
      required: true,
      index: true,
      unique: true,
    },
    token: {
      type: String,
      trim: true,
      required: true,
      index: true,
      unique: true,
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  }
);

const TokenModel = mongoose.model("Token", TokenSchema);

module.exports = TokenModel;
