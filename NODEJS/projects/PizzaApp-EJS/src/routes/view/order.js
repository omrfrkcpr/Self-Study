"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const order = require("../../controllers/view/order");
const idValidation = require("../../middlewares/idValidation");
const permission = require("../../middlewares/permissions");

//* /orders

router.all("/", permission.isLogin, order.list);
router.all("/create", permission.isLogin, order.create);
router.all("/:id",idValidation, permission.isLogin, order.read);
router.all("/:id/update",idValidation, permission.isLogin, order.update);
router.all("/:id/delete",idValidation, permission.isAdmin, order.delete);

/* ------------------------------------------------------- */
module.exports = router;
