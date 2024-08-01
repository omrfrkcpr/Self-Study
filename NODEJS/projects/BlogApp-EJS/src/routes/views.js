"use strict";

const router = require("express").Router();

const {
  BlogPostController: BlogControllerView,
  BlogCategoryController,
} = require("../controllers/blogControllerView");

router.all("/", (req, res) => {
  res.redirect("/post");
});
router.all("/post", BlogControllerView.list);
router.all("/post/create", BlogControllerView.create);
router.all("/post/:postId/update", BlogControllerView.update);
router.all("/post/:postId", BlogControllerView.read);
router.all("/post/:postId/delete", BlogControllerView.delete);

module.exports = router;
