"use strict";
const express = require("express");
require("express-async-errors");
const app = express();
app.use(express.json());
app.all("/", (req, res) => {
  res.send("Contact APP");
});

// ROUTER
app.use(require("./src/routers/contactRouter"));
app.use(require("./src/middlewares/errorHandler"));

app.listen(8000, () => console.log(`server runned http://localhost:8000`));
