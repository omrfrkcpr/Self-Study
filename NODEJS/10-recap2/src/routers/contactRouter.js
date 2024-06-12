"use strict";
const router = require("express").Router();
const contact = require("../controllers/contactController");

router.route("/contacts").get(contact.list).post(contact.create);

router
  .route("/contacts/:id")
  .get(contact.get)
  .put(contact.update)
  .patch(contact.update)
  .delete(contact.delete);

// app.use(router)
module.exports = router;
