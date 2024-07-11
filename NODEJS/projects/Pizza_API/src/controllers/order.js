"use strict";
const sendMail = require("../helpers/sendMail");
/* ---------------------------------- */
/*     NODEJS EXPRESS | Pizza API     */
/* ---------------------------------- */

const Order = require("../models/order");
const Pizza = require("../models/pizza");

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
    const pizzaData = await Pizza.findOne({ _id: data.pizzaId });

    sendMail(
      req.user.email,
      "Order Create",
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #ff6600;
                  color: #ffffff;
                  padding: 10px 0;
                  text-align: center;
              }
              .header h1 {
                  margin: 0;
              }
              .order-details {
                  margin: 20px 0;
              }
              .order-details h2 {
                  color: #ff6600;
              }
              .order-details p {
                  margin: 5px 0;
              }
              .order-details .pizza-image {
                  max-width: 100%;
                  height: auto;
              }
              .footer {
                  text-align: center;
                  margin: 20px 0;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>ClarusPizzas</h1>
              </div>
              <div class="order-details">
                  <h2>Order Confirmation</h2>
                  <p>Order Number: <strong>${data._id}</strong></p>
                  <p>Date: <strong>${new Date(
                    data.createdAt
                  ).toLocaleDateString()}</strong></p>
                  <p>Time: <strong>${new Date(
                    data.createdAt
                  ).toLocaleTimeString()}</strong></p>
                  <hr>
                  <h3>Pizza Details</h3>
                  <p>Pizza: <strong>${pizzaData.name}</strong></p>
                  <p>Size: <strong>${data.size}</strong></p>
                  <p>Quantity: <strong>${data.quantity}</strong></p>
                  <p>Total Price: <strong>${data.amount}</strong></p>
                  <div>
                      <img src="https://yuvamaya.com.tr/upload/recipes/pizza.jpg" alt="Pizza Image" class="pizza-image">
                  </div>
              </div>
              <div class="footer">
                  <p>Thank you for your order!</p>
                  <p>ClarusPizzas Team</p>
              </div>
          </div>
      </body>
      </html>
      `
    );

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
