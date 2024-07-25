"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Brand Model:

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    image: String,
  },
  {
    collection: "brands",
    timestamps: true,
  }
);
/* ------------------------------------------------------- */
module.exports = mongoose.model('Brand', BrandSchema)