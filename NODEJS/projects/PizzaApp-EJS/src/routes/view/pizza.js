"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const pizza = require("../../controllers/view/pizza");
const idValidation = require("../../middlewares/idValidation");
const { isAdmin } = require("../../middlewares/permissions");
const upload = require("../../middlewares/upload");

//* /pizzas
router.all("/", pizza.list);
router.all("/create", isAdmin, upload.array("images"), pizza.create);
router.all("/:id", idValidation, isAdmin, pizza.read);
router.all(
  "/:id/update",
  idValidation,
  isAdmin,
  upload.array("images"),
  pizza.update
);
router.all("/:id/delete", idValidation, isAdmin, pizza.delete);
/* ------------------------------------------------------- */
module.exports = router;
