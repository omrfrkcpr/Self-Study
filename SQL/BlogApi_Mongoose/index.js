"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection");

// --------------------------------------- //
// $ npm i cookie-session
// https://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SECRET_SALT_KEY,
    // maxAge: 24 * 60 * 60 * 1000, // milliseconds (for 24 hours) => we use it in app when we want to set it as a cookie. But in controllers we can set it as a conditional based
  })
);

// User Control Middleware
app.use(require("./src/middlewares/userControl"));

// HomePage:
// app.all("/", (req, res) => {
//   res.send(
//     "<h1 style='text-align:center;margin-top:150px'>WELCOME TO BLOG API</h1>"
//   );
// });
app.all("/", (req, res) => {
  if (req.isLogin) {
    res.send({
      message: "WELCOME TO BLOG API",
      session: req.session,
      user: req.user,
    });
  }
});

// Routers
app.use("/blogs", require("./src/routes/blogRoute"));
app.use("/users", require("./src/routes/user.route"));

// error handler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// require("./src/configs/sync")(); // IIEF
