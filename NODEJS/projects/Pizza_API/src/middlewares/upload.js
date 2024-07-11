"use strict";

/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

//* UPLOAD
//? $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html
// multer module ile "form-data" verileri kabul edebiliriz. Yani dosya yükleme yapılabilir.

const multer = require("multer");

module.exports = multer({
  // dest: "./uploads", // root
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, callbackFunc) => {
      console.log(file);
      callbackFunc(null, Date.now() + "-" + file.originalname);
    },
  }),
  // limit kontrolunu frontend te de kontrol et.
  limits: {
    fileSize: 10000000, // 10MB
  },
  // fileFilter: (req, file, callbackFunc) => {
  //   if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
  //     callbackFunc(null, true);
  //   } else {
  //     callbackFunc(null, false);
  //   }
  // },
});
