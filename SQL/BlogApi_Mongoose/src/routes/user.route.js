const router = require("express").Router();
const UserController = require("../controllers/userController");
const { validateUserId } = require("../middlewares/validateIdHandler");

const { list, create, update, read, destroy, login, logout } = UserController;

// base route => /users

router.route("/").get(list).post(create);

router.route("/login").post(login);
router.get("/logout", logout); // we can use also post method and different route

//! :userID is dynamic route, thats why we have put this router at the end of file, after the other routers for preventing Conflicts
router
  .route("/:userId")
  .all(validateUserId)
  .get(read)
  .put(update)
  .delete(destroy);

module.exports = router;
