"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const express = require("express");
require("express-async-errors");
const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

// Filter,Search,Sort,Pagination(res.getModelList)
app.use(require("./src/middlewares/findSearchSortPagi"));
app.use(require("./src/middlewares/authentication"));

// ROUTERS
app.all("/", (req, res) => {
  // res.send("Welcome to Personnel API");
  console.log(req.user);
  res.send({
    message: "Welcome to Personnel API",
    user: req.user,
  });
});

app.use(require("./src/routes/")); // default olarak index i arar.
app.use(require("./src/routes/index"));
// app.use("/departments", require("./src/routes/department.router"));
// app.use("/personnels", require("./src/routes/personnel.router"));
// app.use("/tokens", require("./src/routes/token.router"));

// Not matched url requests
app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Page not found!",
  });
});

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));
// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------- */

// require("./src/helpers/sync")();
