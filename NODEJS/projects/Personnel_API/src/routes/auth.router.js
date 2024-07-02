"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const idValidation = require("../middlewares/idValidation");

const router = require("express").Router();

const { login, logout } = require("../controllers/auth.controller");

//* Base_URL = /auth

router.port("/login", login);
router.port("/logout", logout);

module.exports = router;
