"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const User = require("../models/user");

module.exports = {
  listUsers: async (req, res) => {
    /*
          #swagger.tags = ["Users"]
          #swagger.summary = "List Users"
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
    const data = await res.getModelList(User);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createUser: async (req, res) => {
    /*
        #swagger.tags = ["Users"]
        #swagger.summary = "Create User"
    */
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "New User successfully created",
      data,
    });
  },
  readUser: async (req, res) => {
    /*
        #swagger.tags = ["Users"]
        #swagger.summary = "Get Single User"
    */
    const data = await User.findOne({ _id: req.params.id });

    if (data) {
      res.status(200).send({
        error: false,
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "User not found",
      });
    }
  },
  updateUser: async (req, res) => {
    /*
        #swagger.tags = ["Users"]
        #swagger.summary = "Update User"
    */
    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "User successfully updated",
        data,
        updatedData: await User.findOne({ _id: req.params.id }),
      });
    } else {
      res.status(404).send({
        error: true,
        message: "User not found",
      });
    }
  },
  deleteUser: async (req, res) => {
    /*
        #swagger.tags = ["Users"]
        #swagger.summary = "Delete User"
    */
    const data = await User.deleteOne({ _id: req.params.id });
    if (data.deletedCount > 0) {
      res.status(204).send({
        error: false,
        message: "User successfully deleted",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "User not found",
        data,
      });
    }
  },
};
