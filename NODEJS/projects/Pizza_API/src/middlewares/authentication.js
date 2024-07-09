"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const Token = require("../models/token");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization;
  const tokenKey = auth ? auth.split(" ") : null;

  // if (tokenKey && tokenKey[0] == "Token") {
  //   // "Token asdaırhıawerasd...""
  //   const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
  //     "userId"
  //   );
  //   req.user = tokenData ? tokenData.userId : false;
  // }

  if (tokenKey) {
    if (tokenKey[0] == "Token") {
      // Simple/Basic/Classic Token
      //* "Token asdaırhıawerasd...""
      const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
        "userId"
      );
      req.user = tokenData ? tokenData.userId : false;
    } else if (tokenKey[0] == "Bearer") {
      // JWT Access Token
      jwt.verify(
        tokenKey[1],
        process.env.ACCESS_KEY,
        function (error, accessData) {
          if (accessData) {
            console.log("JWT verified");
            req.user = accessData;
          } else {
            console.log("JWT failed to verify:", error);
            req.user = false;
          }
        }
      );
    }
  }

  next();
};
