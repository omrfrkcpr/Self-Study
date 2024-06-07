"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
//* ERROR HANDLER

//? errorHandler is middleware and has must be four parameters. (error, request, response, next)

module.exports = (err, req, res, next) => {
  const errorStatusCode = res?.errorStatusCode || 500;
  res.status(errorStatusCode).send({
    error: true,
    status: false,
    message: err.message,
    cause: err.cause,
    stack: err.stack,
  });
};
