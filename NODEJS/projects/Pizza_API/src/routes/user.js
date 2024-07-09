"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();
const {
  listUsers,
  createUser,
  readUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const idValidation = require("../middlewares/idValidation");
const { isAdmin, isLogin } = require("../middlewares/permissions");

//! Base_URL = /users

router.route("/").get(isLogin, listUsers).post(createUser);
router
  .route("/:id")
  .all(idValidation)
  .get(isLogin, readUser)
  .put(isLogin, updateUser)
  .patch(isLogin, updateUser)
  .delete(isAdmin, deleteUser);

module.exports = router;
