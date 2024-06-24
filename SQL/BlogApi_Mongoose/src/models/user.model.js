"use strict";

const mongoose = require("mongoose");
const crypto = require("node:crypto");

// Environment variables for encryption
const saltKey = process.env.SECRET_SALT_KEY || "default_salt";
const iterationCount = parseInt(process.env.SECRET_ITERATION_COUNT, 10);
const charCount = 32; // 32 characters for 64bit
const encryptType = "sha512";

// Password encryption function
const passwordEncrypt = (password) => {
  return crypto
    .pbkdf2Sync(password, saltKey, iterationCount, charCount, encryptType)
    .toString("hex"); // Convert Buffer to hex string
};

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
      match: [
        /^\S+@\S+\.\S+$/,
        "Email is invalid. Please provide a valid email address.",
      ],
    },
    password: {
      type: String,
      required: true,
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

// Pre-save hook to validate and encrypt password
UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  // Validate password
  if (!passwordValidation(user.password)) {
    const err = new Error(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%&?)."
    );
    return next(err);
  }

  // Encrypt password
  user.password = passwordEncrypt(user.password);
  next();
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = { User: UserModel };
