"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const PersonnelModel = require("../models/personnel.model");
const Token = require("../models/token.model");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).send({
        error: true,
        message: "Username and password are required.",
      });
      return;
    }

    // Check if user exists
    const user = await PersonnelModel.findOne({ username });

    if (!user) {
      res.status(401).send({
        error: true,
        message: "Invalid username.",
      });
      return;
    }

    //! findOne modellerdeki setter islemlerinden gelen sonuca gore filtreleme islem yapar. Yani password icin encrypt islemini yapar ilk once, daha sonra esleme yapar modeldeki user la. Mongoose un avantaji.
    // Check if password correct
    const isPasswordCorrect = await PersonnelModel.findOne(password); // Şifreyi karşılaştırmak için modelinizde comparePassword metodu olmalı
    if (!isPasswordCorrect) {
      res.status(401).send({
        error: true,
        message: "Invalid password.",
      });
      return;
    }

    // Kullanıcı aktif mi kontrol et
    if (!user.isActive) {
      res.status(403).send({
        error: true,
        message: "User is not active.",
      });
      return;
    }

    // Token bul veya oluştur
    let tokenData = await Token.findOne({ userId: user._id });
    if (!tokenData) {
      const tokenKey = user._id + Date.now();
      tokenData = await Token.create({ userId: user._id, token: tokenKey });
    }

    res.status(200).send({
      error: false,
      message: "You are successfully logged in!",
      token: tokenData.token,
    });
  },

  logout: async (req, res) => {
    const { token } = req.body;

    if (!token) {
      res.status(400).send({
        error: true,
        message: "Token is required to logout.",
      });
      return;
    }

    const tokenData = await Token.findOneAndDelete({ token });

    if (!tokenData) {
      res.status(401).send({
        error: true,
        message: "Invalid token.",
      });
      return;
    }

    res.status(200).send({
      error: false,
      message: "You have successfully logged out!",
    });
  },
};
