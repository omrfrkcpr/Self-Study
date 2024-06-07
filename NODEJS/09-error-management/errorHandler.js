"use strict";

module.exports = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode || 500;
  res.status(errorStatusCode).send({
    error: res.errorStatusCode,
    status: false,
    message: err.message,
    cause: errorHandler.cause,
    stack: errorHandler.stack,
  });
};
