"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../../controllers/api/user");
const idValidation = require("../../middlewares/idValidation");
const permission = require("../../middlewares/permissions");

//* /users
router.route("/").get(permission.isAdmin, user.list).post(user.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, user.read)
  .put(permission.isLogin, user.update)
  .patch(permission.isLogin, user.update)
  .delete(permission.isAdmin, user.delete);

/* ------------------------------------------------------- */
module.exports = router;
