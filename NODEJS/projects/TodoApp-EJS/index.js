"use strict";
/*
    EXPRESSJS 
    ! TODO PROJECT
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

//catch async-error
require("express-async-errors");

// Embedded JavaScript templating
// https://expressjs.com/de/guide/using-template-engines.html
// https://ejs.co/
app.set("view engine", "ejs");

// json to obj  and obj to json
//! yeri onemli yukarıda kalsın
app.use(express.json());

app.all("/", (req, res) => {
  //   res.send("Welcome to My App");
  const title = "TodoApp-EJS";
  const name = "Omer";
  //   res.render("index", { name, title });
  res.render("index", req.query); // http://localhost:3000/?title=TodoApp&name=Omer
});

// ROUTER
app.use(require("./src/routers/todoRouter"));

// errorHAndler
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`));
