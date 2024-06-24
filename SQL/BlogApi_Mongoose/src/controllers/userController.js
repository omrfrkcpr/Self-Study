"use strict";

const { User } = require("../models/user.model");

module.exports = {
  list: async (req, res) => {
    const users = await User.find();
    res.status(200).send({
      error: false,
      data: users,
    });
  },
  create: async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "New user created successfully!",
      data: newUser,
    });
  },
  read: async (req, res) => {
    const user = await User.find({ _id: req.params.userId });
    res.status(200).send({
      error: false,
      data: user,
    });
  },
  update: async (req, res) => {
    const updatedUsers = await User.updateOne(
      { _id: req.params.userId },
      req.body
    );
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    ); // return new updated data, not old data !
    res.status(202).send({
      error: false,
      message: "User updated successfully!",
      data: updatedUser,
      result: updatedUsers,
    });
  },
  destroy: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    if (data.deletedCount) {
      res.status(204).send({
        error: false,
        message: "User deleted successfully!",
      });
    } else {
      res.status(404).send({
        error: true,
        message: "User not found",
      });
    }
  },
};
