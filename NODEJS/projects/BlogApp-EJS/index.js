"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection");
/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
    // maxAge: 1000 * 60 * 60 * 24 * 3 // miliseconds // 3 days
  })
);

/* ---------------------------------- */
/*              TEMPLATE              */
/* ---------------------------------- */
app.set("view engine", "ejs");
app.set("views", "./public");

// app.use(express.urlencoded({ extended: false })); // accept string as form Data
app.use(express.urlencoded({ extended: true })); // default = accept JSON

//? user control
app.use(require("./src/middlewares/userControl"));

//*Filter,Search,Sort and Pagination
app.use(require("./src/middlewares/findSearchSortPagi"));

// HomePage:
// app.all('/', (req, res) => {
//     res.send("<h1 style='text-align:center;margin-top:150px'>WELCOME TO BLOG API</h1>");
// })
// app.all("/", (req, res) => {
//   if (req.isLogin) {
//     res.send({
//       message: "Welcome to BlogApi",
//       session: req.session,
//       user: req.user,
//     });
//   } else {
//     res.send({
//       message: "Welcome to BlogApi",
//       session: req.session,
//     });
//   }
// });

app.use("/api/blog", require("./src/routes/blogRoute"));
app.use("/api/user", require("./src/routes/user.route"));
app.use("/", require("./src/routes/views"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// require("./src/configs/sync")()
