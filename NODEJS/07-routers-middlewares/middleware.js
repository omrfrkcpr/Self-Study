"use strict";

/* ---------------------------------- */
/*       EXPRESSJS - MIDDLEWARES      */
/* ---------------------------------- */
// https://expressjs.com/en/guide/writing-middleware.html

// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Middleware functions can perform the following tasks:

// - Execute any code.
// - Make changes to the request and the response objects.
// - End the request-response cycle.
// - Call the next middleware in the stack.

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

//? Middleware functions must habe three parameters.
//? Last parameter is for next()

//* Middleware:
// Starting with Express 5, middleware functions that return a Promise will call next(value) when they reject or throw an error. next will be called with either the rejected value or the thrown Error.

//& http://127.0.0.1:8000?username=clarusway

//? 1. Method:
// app.get("/", (req, res, next) => {
//   // console.log("Middleware");
//   req.query?.username === "clarusway" ? next() : res.send("Username is wrong!");
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to clarusway!");
// });

//? 2. Method:
// const myMiddleware = function (req, res, next) {
//   // console.log("Middleware");
//   req.query?.username === "clarusway" ? next() : res.send("Username is wrong!");
// };

// app.use(myMiddleware);

// app.get("/", (req, res) => {
//   res.send("Welcome to clarusway!");
// });

//? 3.Method:
const myMiddleware1 = function (req, res, next) {
  // console.log("Middleware");
  if (req.query?.username === "clarusway") {
    console.log("first middleware");
    next();
  } else {
    res.send("First Username is wrong!");
  }
};

const myMiddleware2 = function (req, res, next) {
  // console.log("Middleware");
  if (req.query?.username === "clarusway") {
    console.log("second middleware");
    next();
  } else {
    res.send("Second Username is wrong!");
  }
};

app.get("/", myMiddleware1, myMiddleware2, (req, res) => {
  res.send("Welcome to clarusway");
});

// Notice the call above to next(). Calling this function invokes the next middleware function in the app. The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
