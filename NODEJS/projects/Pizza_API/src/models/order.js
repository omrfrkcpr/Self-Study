"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },
    size: {
      type: String,
      enum: ["small", "medium", "large"],
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      validate: (quantity) => quantity > 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      get: (price) => Math.round(price * 100) / 100, // round to two decimal places
    },
    amount: {
      type: Number,
      //& 1. Method: Default function
      // default: function () {
      //   return this.price * this.quantity; // update te calismiyor. Create icin
      // },
      // transform: function () {
      //   return this.price * this.quantity; // update te database i guncellemek icin
      // },
      //& 2.Method: Getter
      //   get: function () {
      //     return this.price * this.quantity;
      //   },
    },
  },
  {
    collection: "orders",
    timestamps: true,
    // toJSON: { getters: true }, // for 2.method
  }
);

//& 3.Method: Pre Middleware
// https://mongoosejs.com/docs/middleware.html#pre
orderSchema.pre("save", function (next) {
  //do stuff
  this.amount = this.price * this.quantity;
  next();
});

orderSchema.pre("updateOne", async function (next) {
  //do stuff
  const updateData = this.getUpdate(); // update edilen datayi yakaliyoruz.
  console.log(updateData);
  let newPrice = updateData.price;
  let newQuantity = updateData.quantity;

  if (newPrice || newQuantity) {
    if (!newPrice || !newQuantity) {
      const oldData = await this.model.findOne(this.getQuery());
      newPrice = newPrice || oldData.price;
      newQuantity = newQuantity || oldData.quantity;
    }
    this.set({ amount: newPrice * newQuantity }); // yeni fiyat ve adetteki yeni toplam hesapla
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
