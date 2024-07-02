"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const router = require("express").Router();

router.use("/departments", require("./department.router"));
router.use("/personnels", require("./personnel.router"));
router.use("/tokens", require("./token.router"));

module.exports = router;
