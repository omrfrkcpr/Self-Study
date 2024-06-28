"use strict";

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || res.statusCode || 500;
  res.status(statusCode).send({
    error: true,
    message: err.message,
    // stack: err.stack,
    // timestamp: new Date().toISOString()
  });
};
