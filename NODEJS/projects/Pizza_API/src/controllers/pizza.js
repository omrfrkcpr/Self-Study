"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Pizza = require("../models/pizza");

module.exports = {
  listPizzas: async (req, res) => {
    /*
        #swagger.tags = ["Pizzas"]
        #swagger.summary = "List Pizzas"
        #swagger.description = `
            You can send query with endpoint for filter[], search[], sort[], page and limit.
            <ul> Examples:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */
    const data = await res.getModelList(Pizza);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createPizza: async (req, res) => {
    /*
        #swagger.tags = ["Pizzas"]
        #swagger.summary = "Create Pizza"
    */
    const data = await Pizza.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Pizza successfully created",
      data,
    });
  },
  readPizza: async (req, res) => {
    /*
        #swagger.tags = ["Pizzas"]
        #swagger.summary = "Get Single Pizza"
    */
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
    /*
        #swagger.tags = ["Pizzas"]
        #swagger.summary = "Update Pizza"
    */
    const data = await Pizza.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Pizza successfully updated",
        data,
        updatedData: await Pizza.findOne({ _id: req.params.id }),
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Pizza not found",
      });
    }
  },
  deletePizza: async (req, res) => {
    /*
        #swagger.tags = ["Pizzas"]
        #swagger.summary = "Delete Pizza"
    */
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
