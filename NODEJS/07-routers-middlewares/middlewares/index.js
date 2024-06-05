"use strict";
/* -------EXPRESSJS - MIDDLEWARES--------- */

//* 1. Method
// const middlewareOne = (req, res, next) => {
//   req.messageOne = "middleware one called";
//   next();
// };
// const middlewareTwo = (req, res, next) => {
//   req.messageTwo = "middleware two called";
//   next();
// };

// module.exports = { middlewareOne, middlewareTwo };

// ==========================================

//* 2. Method
// module.exports.middlewareOne = (req, res, next) => {
//   req.messageOne = "middleware one called";
//   next();
// };
// module.exports.middlewareTwo = (req, res, next) => {
//   req.messageTwo = "middleware two called";
//   next();
// };

// ==========================================

//* 3. Method
module.exports = {
  middlewareOne: (req, res, next) => {
    req.messageOne = "middleware one called";
    next();
  },
  middlewareTwo: (req, res, next) => {
    req.messageTwo = "middleware two called";
    next();
  },
};
