"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token")
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req,res,next) => {
    if(req.url.includes("/api")){
        const auth = req.headers?.authorization;
        const tokenKey = auth ? auth.split(" ") : null;

        // if(tokenKey && tokenKey[0] == "Token"){//* "Token asdaırhıawerasd...""
        //     const tokenData = await Token.findOne({token : tokenKey[1]}).populate('userId')
        //     req.user = tokenData ? tokenData.userId : false
        // }

        if (tokenKey) {
          if (tokenKey[0] == "Token") {
            //* "Token asdaırhıawerasd...""
            const tokenData = await Token.findOne({
              token: tokenKey[1],
            }).populate("userId");
            req.user = tokenData ? tokenData.userId : false;
          } else if (tokenKey[0] == "Bearer") {
            //* JWT access token:

            jwt.verify(
              tokenKey[1],
              process.env.ACCESS_KEY,
              function (error, accessData) {
                if (accessData) {
                  console.log("JWT verified");
                  req.user = accessData;
                } else {
                  console.log("JWT not verified");
                  req.user = false;
                  console.log(error);
                }
              }
            );
          }
        }
    }else{
        if (req.session?.user) {
          const { id, password } = req.session.user;
          const user = await User.findOne({ _id: id });
          if (user && user.password == password) {
            req.user = user;
          } else {
            req.session = null;
          }
        }
    }

    next()
}