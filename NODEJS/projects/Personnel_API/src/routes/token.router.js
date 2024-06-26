"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const idValidation = require("../middlewares/idValidation");

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  destroy,
} = require("../controllers/token.controller");

//* Base_URL = /tokens

router.route("/").get(list).post(create);

router
  .route("/:id")
  .all(idValidation)
  .get(read)
  .put(update)
  .patch(update)
  .delete(destroy);

module.exports = router;
