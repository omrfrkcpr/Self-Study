"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | Pizza API     */
/* ---------------------------------- */

const Order = require("../models/order");

module.exports = {
  listOrders: async (req, res) => {
    const data = await res.getModelList(Order);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createOrder: async (req, res) => {
    const data = await Order.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Order successfully created",
      data,
    });
  },
  readOrder: async (req, res) => {
    const data = await Order.findOne({ _id: req.params.id });

    if (data) {
      res.status(200).send({
        error: false,
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Order not found",
      });
    }
  },
  updateOrder: async (req, res) => {
    const data = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Order successfully updated",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Order not found",
      });
    }
  },
  deleteOrder: async (req, res) => {
    const data = await Order.deleteOne({ _id: req.params.id });
    if (data.deletedCount > 0) {
      res.status(204).send({
        error: false,
        message: "Order successfully deleted",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Order not found",
        data,
      });
    }
  },
};
