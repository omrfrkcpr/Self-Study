"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection");

// --------------------------------------- //
// $ npm i cookie-session

const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    secret: process.env.SECRET_SALT_KEY,
    maxAge: 24 * 60 * 60 * 1000, // milliseconds (for 24 hours)
  })
);

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
