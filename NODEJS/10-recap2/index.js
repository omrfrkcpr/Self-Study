"use strict";
const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("Contact APP");
});

// ROUTER
app.use(require('./src/routers/contactRouter'))

app.listen(8000, () => console.log(`server runned http://localhost:8000`));
