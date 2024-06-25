//* Blog Route

const router = require("express").Router();
const { validateBlogId } = require("../middlewares/validateBlogId");
const isAuth = require("../middlewares/isAuth");
const {
  BlogPostController,
  BlogCategoryController,
} = require("../controllers/blogController");

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

const {
  list: listCat,
  create: createCat,
  read: readCat,
  update: updateCat,
  destroy: destroyCat,
} = BlogCategoryController;

router
  .route("/posts")
  .get(list)
  .post(createMany)
  .put(togglePublished)
  .delete(destroyAll);
router.route("/blog").post(create);

//! :id => dinamik route oldugu icin en altta yazilmali ki /posts/... herhangi bir route da karismasin

router
  .route("/posts/:id")
  .all(validateBlogId)
  .get(read)
  .put(update)
  .delete(isAuth, destroy);

router.route("/categories").get(listCat).post(createCat);

router.route("/categories/:id").put(updateCat).delete(destroyCat).get(readCat);

module.exports = router;
