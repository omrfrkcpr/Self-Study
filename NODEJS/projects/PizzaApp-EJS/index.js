"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//* Project Starter Command
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ npm i nodemailer multer
    $ mkdir logs
    $ nodemon
*/
//* Use _projectStarter folder
/*
    $ cp .env-sample .env
    $ mkdir logs
    $ npm install
    $ nodemon
*/

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// TEMPLATE:

let ejs = require("ejs");
// ejs.delimiter = "?"; // ? instead of %
ejs.openDelimiter = "{"; // { instead of <
ejs.closeDelimiter = "}"; // } instead of >

// app.set("view options",{
//   openDelimiter : "{",
//   closeDelimiter : "}"
// })

app.set("views", "./public");
app.set("view engine", "ejs");

// Accept form data & convert to object:
app.use(express.urlencoded({ extended: true }));

// StaticFiles:
app.use("/assets", express.static("./public/assets"));
/* ------------------------------------------------------- */
//* Template içi cookie-session ekledik
// SessionCookies:
const session = require("cookie-session");
app.use(session({ secret: process.env.SECRET_KEY }));

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logging"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// Routes:

// // HomePath:
// app.all('/', (req, res) => {
//     res.send({
//         error: false,
//         message: 'Welcome to PIZZA API',
//         docs: {
//             swagger: "/documents/swagger",
//             redoc: "/documents/redoc",
//             json: "/documents/json",
//         },
//         user: req.user,
//     })
// })

// // routes/index.js:
// //app.use(require('./src/routes/'))//* default yazmadığımızda kök route u esas alır.
// app.use('/', require('./src/routes/'))

/* ------------------------------------------------------- */
// Routes: TEMPLATE + SESSION:

// HomePath:
app.all("/", (req, res) => {
  res.redirect("/pizzas");
});
// auth:
app.use("/auth", require("./src/routes/view/auth"));
// user:
app.use("/users", require("./src/routes/view/user"));
// order:
app.use("/orders", require("./src/routes/view/order"));
// pizza:
app.use("/pizzas", require("./src/routes/view/pizza"));
// topping:
app.use("/toppings", require("./src/routes/view/topping"));

/* ------------------------------------------------------- */
// Routes: API + JWT:

app.use("/api", require("./src/routes/api/"));

//*Static Files
app.use("/uploads", express.static("./uploads")); //* resim vb dosyalar static dosyalardır. bunalrın işlenebilmesi için express.static middlewareine ihtiyacımız var.

//* eşleşmeyen routeları yakalar
app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Route not found!",
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require("./src/helpers/sync")(); // !!! It clear database.
