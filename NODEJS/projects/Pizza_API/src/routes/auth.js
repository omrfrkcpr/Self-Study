"use strict";

const { login, logout } = require("../controllers/auth");

/* ---------------------------------- */
/*     NODEJS EXPRESS | PIZZA API     */
/* ---------------------------------- */

const router = require("express").Router();

//! Base_URL = /auth

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
