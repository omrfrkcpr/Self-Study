"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const auth = require("../../controllers/view/auth")

//* /auth

router.all("/login",auth.login)
router.all("/logout",auth.logout)

/* ------------------------------------------------------- */
module.exports = router