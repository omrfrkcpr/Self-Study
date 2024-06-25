const router = require("express").Router();
const UserController = require("../controllers/userController");

const { list, create, update, read, destroy, login, logout } = UserController;

// base route => /users

router.route("/login").post(login);
router.get("/logout", logout); // we can use also post method and different route

router.route("/").get(list).post(create);

//! :userID is dynamic route, thats why we have put this router at the end of file, after the other routers for preventing Conflicts
router.route("/:userId").get(read).put(update).delete(destroy);

module.exports = router;
