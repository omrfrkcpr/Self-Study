"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const { CustomError } = require("../errors/customError");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (email) =>
          email.includes("@") && email.split("@")[1].includes("."),
        message: "Email is invalid. Please provide a valid email address.",
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      // validate: [
      //   (password) => {
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
      //       password
      //     );
      //   },
      //   "Password validation failed. Please try again",
      // ],
      set: (password) => {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
            password
          )
        )
          return passwordEncrypt(password);
        else return "novalid";
      }, // setter her zaman ilk calisir. Validation gecersiz olur birlikte kullanildiginda.
      validate: [
        (password) => password !== "novalid",
        "Password validation failed. Please try again",
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
  { collection: "users", timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
