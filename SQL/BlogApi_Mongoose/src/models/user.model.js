"use strict";

const mongoose = require("mongoose");

// Custom password validation function
const passwordValidation = (value) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?.])[A-Za-z\d!@#$%&?.]+$/;
  return regex.test(value);
};

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      match: [
        /^[A-Za-z0-9_]+$/,
        "Username should contain only letters, numbers, and underscores.",
      ],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // validation : Regex preferred!
      match: [
        /^\S+@\S+\.\S+$/,
        "Email is invalid. Please provide a valid email address.",
      ],
      // validate: [
      //   (email) => email.includes("@") && email.split("@")[1].includes("."),
      //   "Email is invalid. Please provide a valid email address.",
      // ],
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: passwordValidation,
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%&?.)",
      },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    collection: "user",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
