"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const topping = require("../../controllers/api/topping");
const idValidation = require("../../middlewares/idValidation");
const { isAdmin } = require("../../middlewares/permissions");

router.use(isAdmin);

//* /toppings
router.route("/").get(topping.list).post(topping.create);

router
  .route("/:id")
  .all(idValidation)
  .get(topping.read)
  .put(topping.update)
  .patch(topping.update)
  .delete(topping.delete);
/* ------------------------------------------------------- */
module.exports = router;
