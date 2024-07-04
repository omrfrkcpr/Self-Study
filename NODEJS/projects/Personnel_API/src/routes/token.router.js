"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const idValidation = require("../middlewares/idValidation");
const { isAdmin } = require("../middlewares/permissions");

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  destroy,
} = require("../controllers/token.controller");

//* Base_URL = /tokens

router.use(isAdmin); // if we want to add this middleware to all routes in this router
router.route("/").get(list).post(create);

router
  .route("/:id")
  .all(idValidation)
  .get(read)
  .put(update)
  .patch(update)
  .delete(destroy);

module.exports = router;
