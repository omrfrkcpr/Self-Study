"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection");

// HomePage:
app.all("/", (req, res) => {
  res.send(
    "<h1 style='text-align:center;margin-top:150px'>WELCOME TO BLOG API</h1>"
  );
});

// Routers
app.use("/blogs", require("./src/routes/blogRoute"));
app.use("/users", require("./src/routes/user.route"));

// error handler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// require("./src/configs/sync")(); // IIEF
