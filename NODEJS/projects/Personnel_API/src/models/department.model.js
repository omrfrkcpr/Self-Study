"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const { mongoose } = require("../configs/dbConnection");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "departments",
  }
);

const DepartmentModel = mongoose.model("Department", departmentSchema);

module.exports = DepartmentModel;
