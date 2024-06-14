//* Blog Route

const router = require("express").Router();

const { BlogPostController } = require("../controllers/blogController");

const { list, create, read, update, destroy } = BlogPostController;

router.route("/blogs").get(list).post(create);

router.route("/blogs/:id").get(read).put(update).delete(destroy);

module.exports = router;
