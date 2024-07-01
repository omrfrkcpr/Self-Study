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
require("./src/middlewares/findSearchSortPagi");

// ROUTERS
app.all("/", (req, res) => {
  res.send("Welcome to Personnel API");
});

app.use("/departments", require("./src/routes/department.router"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------- */
