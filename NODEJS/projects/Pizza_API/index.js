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

// asyncErrors to errorHandler: Bu package bize async await functionlarimizda try-catch metodu kullanmadan error yakalamamizi sagliyor.
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Accept FormData
app.use(express.urlencoded({ extended: false }));

// Logger:
app.use(require("./src/middlewares/logging"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ---------------------------------- */
/*                Email               */
/* ---------------------------------- */

//! nodemailer
// https://nodemailer.com/
// https://ethereal.email/ (testing email)

const nodemailer = require("nodemailer");

// nodemailer.createTestAccount().then((data) => console.log(data));
/*
  {
    user: 'gd4o5zgbci3zrido@ethereal.email',
    pass: 'Eu1pTf5GzBWegY9gEf',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email',
    mxEnabled: false
  }
*/

//* Connect Nodemailer
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "gd4o5zgbci3zrido@ethereal.email",
//     pass: "Eu1pTf5GzBWegY9gEf",
//   },
// });

//* SendMail
// transporter.sendMail(
//   {
//     from: `"Omer Faruk" <gd4o5zgbci3zrido@ethereal.email>`, // sender adress
//     to: "gd4o5zgbci3zrido@ethereal.email",
//     // to: "gd4o5zgbci3zrido@ethereal.email, qweqweqweeqw@ethereal.email",
//     subject: "Test Mail", // Subject line
//     text: "Hello World!", // plain text body
//     html: "<b>Hello World?</b>", // html body
//   },
//   (error, success) => {
//     error ? console.log(error) : console.log(success);
//   }
// );

//* GoogleMail (gmail)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "example@gmail.com",
//     pass: "Eu1pTf5GzBWegY9gEf", // received from Google App passwords
//   },
// });

// transporter.sendMail({
//   // from: "example@gmail.com",
//   to: "devfs99@gmail.com",
//   subject: "Test Mail", // Subject line
//   text: "Hello World!", // plain text body
//   html: "<b>Hello World?</b>", // html body
// });

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// routes/index.js:
app.use(require("./src/routes/")); //* default yazmadığımızda kök route u esas alır.

// Static files
app.use("/uploads", express.static("./uploads")); // http://127.0.0.1:8000/uploads/1720689676651-clarinet2.JPG

// Not matched url requests
app.use("/", require("./src/routes/"));

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
// require('./src/helpers/sync')() // !!! It clear database.
