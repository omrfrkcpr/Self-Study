"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Topping = require("../models/topping");

module.exports = {
  listToppings: async (req, res) => {
    /*
        #swagger.tags = ["Toppings"]
        #swagger.summary = "List Toppings"
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
    const data = await res.getModelList(Topping);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createTopping: async (req, res) => {
    /*
        #swagger.tags = ["Toppings"]
        #swagger.summary = "Create Topping"
    */
    const data = await Topping.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Topping successfully created",
      data,
    });
  },
  readTopping: async (req, res) => {
    /*
        #swagger.tags = ["Toppings"]
        #swagger.summary = "Get Single Topping"
    */
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
    /*
        #swagger.tags = ["Toppings"]
        #swagger.summary = "Update Topping"
    */
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
    /*
        #swagger.tags = ["Toppings"]
        #swagger.summary = "Delete Topping"
    */
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
