"use strict";

const Todo = require("../models/todoModel");

module.exports = {
  list: async (req, res) => {
    const data = await Todo.findAndCountAll();

    res.render("todoList", { data });
  },
  create: async (req, res) => {
    if (req.method == "GET") {
      res.render("todoCreate");
    } else {
      if (req.body.isDone) {
        req.body.isDone = true;
      }
      await Todo.create(req.body);
      res.redirect("/view"); // yonelndirme icin kullanilan method route adini yaziyoruz.
    }
  },
};
