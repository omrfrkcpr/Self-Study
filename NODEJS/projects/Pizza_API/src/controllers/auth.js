"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const User = require("../models/user");
const Token = require("../models/token");
const { CustomError } = require("../errors/customError");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    /*
        #swagger.tags = ["Authentication"]
        #swagger.summary = "Login"
        #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: {
                "username": "test",
                "password": "aA?123456",
            }
        }
    */
    const { username, password, email } = req.body;

    if ((email || username) && password) {
      const user = await User.findOne({ $or: [{ username }, { email }] }); // findOne, setter uygulanmis sekilde donus yapar. Body den gelen password in hash lenmis hali ile check etmemiz lazim.
      if (user && user.password == passwordEncrypt(password)) {
        if (user.isActive) {
          let tokenData = await Token.findOne({ userId: user._id });
          if (!tokenData) {
            const tokenKey = passwordEncrypt(user._id + Date.now());
            tokenData = await Token.create({
              userId: user._id,
              token: tokenKey,
            });
            res.status(200).send({
              error: false,
              message: "You are successfully logged in!",
              token: tokenData.token,
              user,
            });
          }
        } else {
          throw new CustomError("This Account is inactive!", 401);
        }
      } else {
        throw new CustomError(
          "Wrong username/email or password. Please try again!",
          401
        );
      }
    } else {
      throw new CustomError(
        "Please provide a valid username/email and password",
        401
      );
    }
  },
  logout: async (req, res) => {
    /*
        #swagger.tags = ["Authentication"]
        #swagger.summary = "simpleToken: Logout"
        #swagger.description = 'Delete token key.'
    */
    const auth = req.headers?.authorization;
    const tokenKey = auth ? auth.split(" ") : null;
    let deleted = null;
    if (tokenKey && tokenKey[0] == "Token") {
      deleted = await Token.deleteOne({ token: tokenKey[1] });
    }
    res.status(deleted !== null ? 200 : 400).send({
      error: !deleted !== null,
      message:
        deleted !== null
          ? "You are successfully logged out!"
          : "Logout failed. Please try again!",
    });
  },
};
