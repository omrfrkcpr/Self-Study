"use strict";

const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      trype: String,
      trim: true,
      required: true,
    },
    description: {
      trype: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "tutorial",
    timestamps: true,
  }
);

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
