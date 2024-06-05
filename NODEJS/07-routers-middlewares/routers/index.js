"use strict";

/* ---------------------------------- */
/*         EXPRESSJS - ROUTING        */
/* ---------------------------------- */

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

router
  .route("/user")
  .get((req, res) => res.send({ message: "User Hello World! GET" }))
  .post((req, res) => res.send({ message: "User Hello World! POST" }))
  .put((req, res) => res.send({ message: "User Hello World! PUT" }))
  .delete((req, res) => res.send({ message: "User Hello World! DELETE" }));

module.exports = router;
