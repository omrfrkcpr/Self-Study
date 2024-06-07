"use strict";

//* ---------------------------------- */
//*          ERROR MANAGEMENT          */
//* ---------------------------------- */

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});

// ===============================================

// app.get("/", (req, res) => {
//   throw new Error("Something went wrong!");
// });

// ===============================================

// app.get("/user/:id", (req, res, next) => {
//   // throw new Error("Auth Middleware");
//   const id = req.params?.id || 0;

//   try {
//     if (isNaN(id)) {
//       throw new Error("Id is not a number");
//     }
//     res.status(200).send({ status: "OK" });
//   } catch (error) {
//     res.status(403).send({ status: "FAIL" });
//   }
// });

// ===============================================

//? Error Handling Middleware
//? Control with catch (next)

// app.get("/", (req, res) => {
//   throw new Error("Something went wrong!");
//   res.send("true");
// });

const asyncFunction = async () => {
  throw new Error("Async Error");
};

app.get("/async", async (req, res, next) => {
  res.errorStatusCode = 501;
  // await asyncFunction()
  //   .then()
  //   .catch((err) => {
  //     next(err);
  //   });
  await asyncFunction().then().catch(next);
});

// const errorHandler = (err, req, res, next) => {
//   const errorStatusCode = res.errorStatusCode || 500;
//   res.status(errorStatusCode).send({
//     error: res.errorStatusCode,
//     status: false,
//     message: err.message,
//     cause: errorHandler.cause,
//     stack: errorHandler.stack,
//   });
// };

// app.use(errorHandler);

app.use(require("./errorHandler"));
