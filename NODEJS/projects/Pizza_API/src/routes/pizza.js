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

//! Base_URL = /pizzas

router.route("/").get(listPizzas).post(createPizza);
router
  .route("/:id")
  .all(idValidation)
  .get(readPizza)
  .put(updatePizza)
  .patch(updatePizza)
  .delete(deletePizza);

module.exports = router;
