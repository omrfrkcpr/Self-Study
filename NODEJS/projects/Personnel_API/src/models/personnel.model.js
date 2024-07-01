"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");

const personnelSchema = new mongoose.Schema(
  {
    departmenId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => passwordEncrypt(password),
      // select: false,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      validate: [
        (email) => email.includes("@") && email.split("@")[1].includes("."),
        "Email is invalid. Please provide a valid email address",
      ],
    },
    salary: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
      default: "No description",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isLead: {
      type: Boolean,
      default: false,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "personnel",
  }
);

const PersonnelModel = mongoose.model("Personnel", personnelSchema);

module.exports = PersonnelModel;
