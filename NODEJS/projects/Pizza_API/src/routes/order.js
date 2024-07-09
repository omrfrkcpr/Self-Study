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
const { isLogin, isAdmin } = require("../middlewares/permissions");

//! Base_URL = /orders

router.route("/").get(isLogin, listOrders).post(isLogin, createOrder);
router
  .route("/:id")
  .all(idValidation)
  .get(isLogin, readOrder)
  .put(isAdmin, updateOrder)
  .patch(isAdmin, updateOrder)
  .delete(isAdmin, deleteOrder);

module.exports = router;
