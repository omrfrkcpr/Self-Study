"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const topping = require("../../controllers/view/topping");
const idValidation = require("../../middlewares/idValidation");
const { isAdmin } = require("../../middlewares/permissions");

router.use(isAdmin);

router.all("/", topping.list);
router.all("/create", topping.create);
router.all("/:id", idValidation, topping.read);
router.all("/:id/update", idValidation, topping.update);
router.all("/:id/delete", idValidation, topping.delete);

/* ------------------------------------------------------- */
module.exports = router;
