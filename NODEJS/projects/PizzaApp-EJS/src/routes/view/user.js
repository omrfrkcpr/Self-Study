"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../../controllers/view/user");
const idValidation = require("../../middlewares/idValidation");
const permission = require("../../middlewares/permissions");

//* /users

router.all("/", permission.isAdmin, user.list);
router.all("/create", user.create);
router.all("/:id",idValidation, permission.isLogin, user.read);
router.all("/:id/update",idValidation, permission.isLogin, user.update);
router.all("/:id/delete",idValidation, permission.isAdmin, user.delete);
/* ------------------------------------------------------- */
module.exports = router;
