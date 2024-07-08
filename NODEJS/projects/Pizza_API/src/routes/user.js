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

//! Base_URL = /users

router.route("/").get(listUsers).post(createUser);
router
  .route("/:id")
  .all(idValidation)
  .get(readUser)
  .put(updateUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
