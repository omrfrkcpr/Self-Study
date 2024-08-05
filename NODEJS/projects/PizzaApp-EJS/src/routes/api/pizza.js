"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const pizza = require("../../controllers/api/pizza");
const idValidation = require("../../middlewares/idValidation");
const { isAdmin } = require("../../middlewares/permissions");
// const multer = require("multer");

// const upload = multer({
//   // dest: "./uploads",// root
//   storage:multer.diskStorage({
//     destination:"./uploads",
//     filename:function(req,file,returnCallback){
//       // returnCallback(null,"anthony,jpeg")
//       console.log(file)
//       returnCallback(null, Date.now() + "-" + file.originalname)
//     }
//   })
// });
const upload = require("../../middlewares/upload");

//* /pizzas
router
  .route("/")
  .get(pizza.list)
  // .post(isAdmin, upload.single("fileInputName"), pizza.create);
  // .post(isAdmin, upload.single("image"), pizza.create);// single
  // .post(isAdmin, upload.any(), pizza.create); // not recommended
  .post(isAdmin, upload.array("images"), pizza.create); // recommended
// .post(isAdmin, upload.array("images",10), pizza.create); // recommended

router
  .route("/:id")
  .all(idValidation)
  .get(pizza.read)
  .put(isAdmin, upload.array("images"), pizza.update)
  .patch(isAdmin, upload.array("images"), pizza.update)
  .delete(isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
