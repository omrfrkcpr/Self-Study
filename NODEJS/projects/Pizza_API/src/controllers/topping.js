"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Topping = require("../models/topping");

module.exports = {
  listToppings: async (req, res) => {
    const data = await res.getModelList(Topping);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createTopping: async (req, res) => {
    const data = await Topping.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Topping successfully created",
      data,
    });
  },
  readTopping: async (req, res) => {
    const data = await Topping.findOne({ _id: req.params.id });

    if (data) {
      res.status(200).send({
        error: false,
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Topping not found",
      });
    }
  },
  updateTopping: async (req, res) => {
    const data = await Topping.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Topping successfully updated",
        data,
        updatedData: await Topping.findOne({ _id: req.params.id }),
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Topping not found",
      });
    }
  },
  deleteTopping: async (req, res) => {
    const data = await Topping.deleteOne({ _id: req.params.id });
    if (data.deletedCount > 0) {
      res.status(204).send({
        error: false,
        message: "Topping successfully deleted",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Topping not found",
        data,
      });
    }
  },
};
