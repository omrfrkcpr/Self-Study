"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    // image: {
    //   type: String,
    //   trim: true,
    // },
    images: [
      {
        type: String,
        trim: true,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    // toppingIds: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Topping",
    // }, //* Many to One
    toppingIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ], //* Many to Many
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

module.exports = mongoose.model("Pizza", PizzaSchema);
