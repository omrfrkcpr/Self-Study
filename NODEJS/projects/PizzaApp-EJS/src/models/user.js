"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection');
const { CustomError } = require('../errors/customError');
const passwordEncrypt = require('../helpers/passwordEncrypt');
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      //   set: passwordEncrypt,
      // validate: [
      //   (password) =>
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(password),
      //   "Password type is incorrect!"
      // ],
      // set: (password) => passwordEncrypt(password),//*validate set metodundan sonra çalışıyor o nedenle şifre her türlü valdiate işleminden geçmiyor. Bu durumun önüne geçmek için validasyonu set içinde yapabiliriz veya pre middlewarei kullanılabilir.
      set: (password) => {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
            password
          )
        ) {
          return passwordEncrypt(password);
        } else {
          return "novalid";
        }
      },
      validate: [
        (password) => password != "novalid",
        "Password type is incorrect!",
      ],
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("User",UserSchema)