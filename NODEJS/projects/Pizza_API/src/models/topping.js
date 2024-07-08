"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const toppingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  { collection: "toppings", timestamps: true }
);

const Topping = mongoose.model("Topping", toppingSchema);

module.exports = Topping;
