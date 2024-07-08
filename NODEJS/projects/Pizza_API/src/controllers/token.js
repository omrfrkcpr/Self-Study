"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Token = require("../models/token");

module.exports = {
  listTokens: async (req, res) => {
    /*
        #swagger.tags = ["Tokens"]
        #swagger.summary = "List Tokens"
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
    const data = await res.getModelList(Token);
    res.status(200).send({
      error: false,
      defails: await res.getModelListDetails,
      data,
    });
  },
  createToken: async (req, res) => {
    /*
        #swagger.tags = ["Tokens"]
        #swagger.summary = "Create Token"
    */
    const data = await Token.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Token successfully created",
      data,
    });
  },
  readToken: async (req, res) => {
    /*
        #swagger.tags = ["Tokens"]
        #swagger.summary = "Get Single Token"
    */
    const data = await Token.findOne({ _id: req.params.id });

    if (data) {
      res.status(200).send({
        error: false,
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Token not found",
      });
    }
  },
  updateToken: async (req, res) => {
    /*
        #swagger.tags = ["Tokens"]
        #swagger.summary = "Get Single Token"
    */
    const data = await Token.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (data.modifiedCount > 0) {
      res.status(202).send({
        error: false,
        message: "Token successfully updated",
        data,
        updatedData: await Token.findOne({ _id: req.params.id }),
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Token not found",
      });
    }
  },
  deleteToken: async (req, res) => {
    /*
        #swagger.tags = ["Tokens"]
        #swagger.summary = "Delete Token"
    */
    const data = await Token.deleteOne({ _id: req.params.id });
    if (data.deletedCount > 0) {
      res.status(204).send({
        error: false,
        message: "Token successfully deleted",
        data,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Token not found",
        data,
      });
    }
  },
};
