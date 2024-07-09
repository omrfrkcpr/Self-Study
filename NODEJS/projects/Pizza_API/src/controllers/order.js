"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | Pizza API     */
/* ---------------------------------- */

const Order = require("../models/order");

module.exports = {
  listOrders: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "List Orders"
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
    let customFilter = {};

    if (!req.user.idAdmin) {
      customFilter = { userId: req.user._id };
    }
    const data = await res.getModelList(Order, customFilter, [
      "userId",
      {
        path: "pizzaId",
        select: "-__v",
        populate: [{ path: "toppingsIds", select: "name" }],
      },
    ]);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createOrder: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Create Order"
    */
    // delete req.body.amount // look amount in Order Model => for 2.method : Amount alanini db ye eklemeden, UI da gosterebilmek icin

    if (!req.body.isAdmin) {
      req.body.userId = req.user._id;
    }
    const data = await Order.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Order successfully created",
      data,
    });
  },
  readOrder: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Get Single Order"
    */

    let customFilter = {};

    if (!req.user.isAdmin) {
      customFilter = { userId: req.user._id };
    }
    const data = await Order.findOne({
      _id: req.params.id,
      ...customFilter,
    }).populate("userId, pizzaId");

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
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Update Order"
    */
    // delete req.body.amount // look amount in Order Model => for 2.method : Amount alanini db ye eklemeden, UI da gosterebilmek icin
    const data = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Order successfully updated",
        data,
        updatedData: await Order.findOne({ _id: req.params.id }),
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Order not found",
      });
    }
  },
  deleteOrder: async (req, res) => {
    /*
        #swagger.tags = ["Orders"]
        #swagger.summary = "Delete Order"
    */
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
