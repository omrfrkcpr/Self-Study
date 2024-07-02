"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const idValidation = require("../middlewares/idValidation");
const { isAdmin, isAdminOrOwn } = require("../middlewares/permissions");

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  destroy,
} = require("../controllers/personnel.controller");

//* Base_URL = /personnels

router.route("/").get(isAdmin, list).post(isAdmin, create);

router
  .route("/:id")
  .all(idValidation)
  .get(isAdminOrOwn, read)
  .put(isAdminOrOwn, update)
  .patch(isAdminOrOwn, update)
  .delete(isAdmin, destroy);

module.exports = router;
