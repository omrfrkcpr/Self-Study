"use strict";
require("express-async-errors");
const express = require("express");
require("dotenv").config();
const { mongooseConnection } = require("./startup/mongooseConnection");
const PORT = process.env?.PORT || 8000;

const app = express();
app.use(express.json());

app.all("/", (req, res) => {
  res.send("Hello TutorialApp");
});

app.use(require("./middlewares/errorHandler"));
mongooseConnection();
app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));
