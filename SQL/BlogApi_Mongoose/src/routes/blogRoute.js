//* Blog Route

const router = require("express").Router();
const validateBlogIdHandler = require("../middlewares/validateBlogIdHandler");
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

router.route("/categories").get(listCat).post(createCat);

router.route("/categories/:id").put(updateCat).delete(destroyCat).get(readCat);

module.exports = router;
