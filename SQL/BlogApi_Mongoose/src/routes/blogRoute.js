//* Blog Route

const router = require("express").Router();
const validateBlogIdHandler = require("../middlewares/validateBlogIdHandler");
const { BlogPostController } = require("../controllers/blogController");

const {
  list,
  create,
  createMany,
  read,
  update,
  togglePublished,
  destroy,
  destroyAll,
} = BlogPostController;

router
  .route("/blogs")
  .get(list)
  .post(createMany)
  .put(togglePublished)
  .delete(destroyAll);
router.route("/blog").post(create);

//! :id => dinamik route oldugu icin en altta yazilmali ki /blogs/... herhangi bir route da karismasin
router
  .route("/blogs/:id")
  .all(validateBlogIdHandler)
  .get(read)
  .put(update)
  .delete(destroy);

module.exports = router;
