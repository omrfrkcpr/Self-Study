"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();
const {
  listOrders,
  createOrder,
  readOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order");
const idValidation = require("../middlewares/idValidation");

//! Base_URL = /orders

router.route("/").get(listOrders).post(createOrder);
router
  .route("/:id")
  .all(idValidation)
  .get(readOrder)
  .put(updateOrder)
  .patch(updateOrder)
  .delete(deleteOrder);

module.exports = router;
