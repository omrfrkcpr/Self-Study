"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Pizza = require("../models/pizza");

module.exports = {
  listPizzas: async (req, res) => {
    const data = await res.getModelList(Pizza);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createPizza: async (req, res) => {
    const data = await Pizza.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Pizza successfully created",
      data,
    });
  },
  readPizza: async (req, res) => {
    const data = await Pizza.findOne({ _id: req.params.id });

    if (data) {
      res.status(200).send({
        error: false,
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Pizza not found",
      });
    }
  },
  updatePizza: async (req, res) => {
    const data = await Pizza.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Pizza successfully updated",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Pizza not found",
      });
    }
  },
  deletePizza: async (req, res) => {
    const data = await Pizza.deleteOne({ _id: req.params.id });
    if (data.deletedCount > 0) {
      res.status(204).send({
        error: false,
        message: "Pizza successfully deleted",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Pizza not found",
        data,
      });
    }
  },
};
