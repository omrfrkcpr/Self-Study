"use strict";
/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();
const {
  listTokens,
  createToken,
  readToken,
  deleteToken,
  updateToken,
} = require("../controllers/token");
const idValidation = require("../middlewares/idValidation");

//! Base_URL = /tokens

router.route("/").get(listTokens).post(createToken);
router
  .route("/:id")
  .all(idValidation)
  .get(readToken)
  .put(updateToken)
  .patch(updateToken)
  .delete(deleteToken);

module.exports = router;
