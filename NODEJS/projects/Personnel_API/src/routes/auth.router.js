"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const router = require("express").Router();

const { login, logout } = require("../controllers/auth.controller");

//* Base_URL = /auth

router.post("/login", login);
// router.all("/logout", logout) // swagger all methodunu gormez
router.get("/logout", logout);

module.exports = router;
