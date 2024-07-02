"use strict";
/* -------------------------------------------------------
EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const TokenModel = require("../models/token.model");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      //? findOne metodu filtreleme yaparken modeldki set fonksiyonlarını çalıştırır. Burada da ek bir işleme ihtiyaç olmadan passwordu modeldeki set metodundaki encrypt i kullanarak işlemden geçirip db'de filtreleme yapar
      const user = await Personnel.findOne({ username, password });
      if (user && user.isActive) {
        //*bu usera ait token var mı kontrol et
        let tokenData = await TokenModel.findOne({ userId: user._id });

        //? eğer token yoksa bu usera yeni bir token oluştur
        if (!tokenData) {
          const tokenKey = passwordEncrypt(user._id + Date.now());
          // console.log(user._id + Date.now());
          tokenData = await TokenModel.create({
            userId: user._id,
            token: tokenKey,
          });
        }

        res.status(200).send({
          error: false,
          token: tokenData.token,
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong Username or Password.");
      }
    } else {
      res.errorStatusCode = 400;
      throw new Error("username or password is required.");
    }
  },
  logout: async (req, res) => {
    //* 1. method = if we have only one token key for each user (unique)
    console.log(req.user);
    const deleted = await TokenModel.deleteOne({ userId: req.user._id });

    //* 2. method = if we have multiple token key for each userId
    // const auth = req.headers?.authorization ||null
    // const tokenKey = auth ? auth.split(" ") : null

    // let deleted = null
    // if (tokenKey && tokenKey[0] == "Token"){
    //   deleted = await TokenModel.deleteOne({token: tokenKey})
    // }

    //* 2.method = Auth logout from every devices by multiple tokens
    // console.log(req.user)
    // const deleted = await TokenModel.deleteMany({userId: req.user._id})

    res.status(deleted.deletedCount > 0 ? 200 : 400).send({
      error: !deleted.deletedCount,
      message:
        deleted.deletedCount > 0
          ? "You are successfully logged out"
          : "Logout failed!",
    });
  },
};
