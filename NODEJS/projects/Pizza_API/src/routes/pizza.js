"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();
const {
  listPizzas,
  createPizza,
  readPizza,
  deletePizza,
  updatePizza,
} = require("../controllers/pizza");
const idValidation = require("../middlewares/idValidation");
const { isAdmin } = require("../middlewares/permissions");
// const multer = require("multer");

// const upload = multer({
//   // dest: "./uploads", // root
//   storage: multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, callbackFunc) => {
//       console.log(file);
//       callbackFunc(null, Date.now() + "-" + file.originalname);
//     },
//   }),
//   // limit kontrolunu frontend te de kontrol et.
//   limits: {
//     fileSize: 10000000, // 10MB
//   },
//   // fileFilter: (req, file, callbackFunc) => {
//   //   if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
//   //     callbackFunc(null, true);
//   //   } else {
//   //     callbackFunc(null, false);
//   //   }
//   // },
// });
const upload = require("../middlewares/upload");

//! Base_URL = /pizzas

router
  .route("/")
  .get(listPizzas)
  // .post(isAdmin, upload.single("fileInputName"), createPizza);
  // .post(isAdmin, upload.single("image"), createPizza); //! single
  // .post(isAdmin, upload.any(), createPizza); //! not recommended
  .post(isAdmin, upload.array("images", 10), createPizza); // ikinci parametre kac veri yuklenebilecegini belirtir. //! Recommended
router
  .route("/:id")
  .all(idValidation)
  .get(readPizza)
  .put(isAdmin, upload.array("images", 10), updatePizza)
  .patch(isAdmin, upload.array("images", 10), updatePizza)
  .delete(isAdmin, deletePizza);

module.exports = router;
