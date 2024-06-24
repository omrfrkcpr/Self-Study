const router = require("express").Router();
const UserController = require("../controllers/userController");
const { validateUserId } = require("../middlewares/validateIdHandler");

const { list, create, update, read, destroy } = UserController;

// base route => /users

router.route("/").get(list).post(create);

router
  .route("/:userId")
  .all(validateUserId)
  .get(read)
  .put(update)
  .delete(destroy);

module.exports = router;
