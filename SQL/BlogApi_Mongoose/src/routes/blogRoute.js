// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const {
  BlogCategoryController,
  BlogPostController,
} = require("../controllers/blogController");
const authenticate = require("../middlewares/authenticate");
const validateBlogId = require("../middlewares/validateBlogId");

router.use(authenticate);

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

// Blog Post Routes
router.route("/posts").get(list).delete(destroyAll).post(create);

router.route("/posts/many").post(createMany);
router.route("/posts/togglePublished").patch(togglePublished);

router
  .route("/posts/:id")
  .all(validateBlogId)
  .get(read)
  .put(update)
  .delete(destroy);

router.route("/categories").get(listCat).post(createCat);

router.route("/categories/:id").put(updateCat).delete(destroyCat).get(readCat);

module.exports = router;
