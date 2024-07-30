"use strict";

const router = require("express").Router();
const todoTemplate = require("../controllers/todoTemplate");

// app.use(router)
router.get("/", todoTemplate.list);

module.exports = router;
