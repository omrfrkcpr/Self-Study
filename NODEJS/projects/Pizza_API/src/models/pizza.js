"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const pizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    toppingsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ], //& Many to Many relation
  },
  { collection: "pizzas", timestamps: true }
);

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
