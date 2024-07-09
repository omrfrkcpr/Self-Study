"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();
const {
  listToppings,
  createTopping,
  readTopping,
  deleteTopping,
  updateTopping,
} = require("../controllers/topping");
const idValidation = require("../middlewares/idValidation");
const { isAdmin } = require("../middlewares/permissions");

//! Base_URL = /toppings

router.use(isAdmin);
router.route("/").get(listToppings).post(createTopping);
router
  .route("/:id")
  .all(idValidation)
  .get(readTopping)
  .put(updateTopping)
  .patch(updateTopping)
  .delete(deleteTopping);

module.exports = router;
