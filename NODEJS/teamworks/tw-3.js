"use strict";

const express = require("express");
const app = express();

const router = express.Router();
app.use(router);

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Served is running on ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// ===========================================
//? Write the regex expression that matches the required conditions;

//* 1 = Write a router that matches /abc or /acd path.
// http://localhost:3000/abc
// router.get(/\/abc|\/acd/, (req, res) => {
//   res.send("Matched /abc or /acd");
// });

// ===========================================

//* 2 = Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or
// http://localhost:3000/a1/ccc
// router.get(/\/a\d\/c{2,3}/, (req, res) => {
//   res.send("Matched /a(any single digit)/ followed by 2 times c or 3 times c");
// });

// ===========================================

//* 3 = Routes that must end with string "Hello" and can have any no. of any character before that.
// http://localhost:3000/wqeqweHello
// router.get(/.*Hello$/, (req, res) => {
//   res.send("Matched any route ending with Hello");
// });

// ===========================================

//* 4 = Matching routes must end with the string "Hello" and must not have any characters before that.
// http://localhost:3000/Hello
// router.get(/^\/Hello$/, (req, res) => {
//   res.send("Matched route ending with Hello with no characters before");
// });

// ===========================================
//? I have an object with student information. Code the desired routers.

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Steve",
  },
];

/* 
- Returns all students in json format with the get method
- Returns information about the requested student in json format
- If there is any missing/error in the code, please correct it.
*/

// ==========================================

// app.get("/", (req, res) => {
//   res.json(students);
// });

//===========================================

//& Params
// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const student = students.find((student) => student.id == id);
//   if (student) {
//     res.json(student);
//   } else {
//     res.status(404).send("Student not found");
//   }
// });

// ===========================================

//& Query
// app.get("/", (req, res) => {
//   if (req.query.studentName) {
//     const student = students.find(
//       (student) => student.name == req.query.studentName
//     );
//     res.json(student);
//   } else if (req.query.studentId) {
//     const student = students.find(
//       (student) => student.id == req.query.studentId
//     );
//     res.json(student);
//   } else {
//     res.json(students);
//   }
// });

// ===========================================

//? Code the instructions below.

/*
  - import the Express framework and create an Express application.
  - define a middleware function using app.use(). This function logs a message and then calls next() to pass control to the next middleware or route handler.
  - define a route handler for the root URL ('/') using app.get(). This handler will respond with "Hello!" when a GET request is made to the root URL.
  - Finally, srart the Express server and listen on port 3000.
*/

//* Middleware
// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     console.log("Req method is GET");
//     next();
//   } else {
//     res.status(403).send("Please use GET method");
//   }
// });

//* Main Route Handler
// app.get("/", (req, res) => {
//   res.send("Hello GET method!");
// });

// ===========================================

//? In the code block below, a custom error middlaware is missing which returns a 500 status code and the detail of the error generated. Complete the code.

//* Middleware to throw an error
app.use((req, res, next) => {
  throw new Error("Something went wrong!");
});

//* Custom error-handling middleware
const errorHandler = (err, req, res, next) => {
  // console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).send({
    status: 500,
    message: err.message,
    // stack: process.env.NODE_ENV === "development" ? err.stack : {}, // Only show stack trace in development
  });
};

//* Use the error-handling middleware
app.use(errorHandler);

// ===========================================
