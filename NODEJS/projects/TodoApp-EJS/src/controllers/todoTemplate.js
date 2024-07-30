"use strict";

const Todo = require("../models/todoModel");

module.exports = {
  list: async (req, res) => {
    const data = await Todo.findAndCountAll();

    res.render("todoList", { data });
  },
};
