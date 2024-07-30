"use strict";

const router = require("express").Router();
const todoTemplate = require("../controllers/todoTemplate");

// app.use(router)
router.get("/", todoTemplate.list);
router.get("/create", todoTemplate.create);
router.post("/create", todoTemplate.create);

module.exports = router;
