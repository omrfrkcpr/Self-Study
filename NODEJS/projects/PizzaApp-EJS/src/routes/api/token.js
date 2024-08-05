"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const token = require("../../controllers/api/token");
const idValidation = require("../../middlewares/idValidation");
const { isAdmin } = require("../../middlewares/permissions");

router.use(isAdmin);

//* /tokens
router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .all(idValidation)
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);

/* ------------------------------------------------------- */
module.exports = router;
