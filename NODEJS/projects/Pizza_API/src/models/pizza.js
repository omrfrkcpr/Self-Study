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
    // image: {
    //   type: String,
    //   trim: true,
    // },
    images: [
      {
        type: String,
        trim: true,
      },
    ], // database e resim kaydedemiyoruz. Sadece path ini kaydedecegiz.
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    toppingsIds: [
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
