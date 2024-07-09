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

//! Base_URL = /pizzas

router.route("/").get(listPizzas).post(isAdmin, createPizza);
router
  .route("/:id")
  .all(idValidation)
  .get(readPizza)
  .put(isAdmin, updatePizza)
  .patch(isAdmin, updatePizza)
  .delete(isAdmin, deletePizza);

module.exports = router;
