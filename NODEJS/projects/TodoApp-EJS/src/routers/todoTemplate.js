"use strict";

const router = require("express").Router();
const todoTemplate = require("../controllers/todoTemplate");

// app.use(router)
router.get("/", todoTemplate.list);
router.get("/create", todoTemplate.create);
router.post("/create", todoTemplate.create);
router.get("/:todoId", todoTemplate.read);
router.get("/update/:todoId", todoTemplate.update);
router.post("/update/:todoId", todoTemplate.update);
router.get("/delete/:todoId", todoTemplate.delete);

module.exports = router;
