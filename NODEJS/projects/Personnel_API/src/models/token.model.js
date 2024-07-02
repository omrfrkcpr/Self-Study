"use strict";

/* ---------------------------------- */
/*       EXPRESS - PERSONNEL API      */
/* ---------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Personnel",
      required: true,
      index: true,
      unique: true, // birden fazla sisteme izin verilip verilmemesiyle alakali bir durum. Ayni anda hem telefon, hem pc den acilmasi gerekiyorsa. Unique olmamali. Unique olursa ornegin cikis yapildiginda tum acik sistemlerden logout olur.
    },
    token: {
      type: String,
      trim: true,
      required: true,
      index: true,
      unique: true,
      // expires: 86400, // 24 hours
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  }
);

const TokenModel = mongoose.model("Token", tokenSchema);

module.exports = TokenModel;
