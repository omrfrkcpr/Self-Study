"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  destroy,
} = require("../controllers/department.controller");

//* Base_URL = /departments

router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).delete(destroy);

module.exports = router;
