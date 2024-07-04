"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const idValidation = require("../middlewares/idValidation");
const {
  isLogin,
  isAdmin,
  isAdminorLead,
} = require("../middlewares/permissions");

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  destroy,
  personnels,
} = require("../controllers/department.controller");

//* Base_URL = /departments

router.route("/").get(isLogin, list).post(isAdmin, create);

router.route("/:id/personnels").get(isAdminorLead, personnels); // list personnels base on specific department

router
  .route("/:id")
  .all(idValidation)
  .get(isLogin, read)
  .put(isAdmin, update)
  .patch(isAdmin, update)
  .delete(isAdmin, destroy);

module.exports = router;
