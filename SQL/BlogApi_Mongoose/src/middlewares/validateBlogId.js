// validateBlogId.js
const { BlogPost } = require("../models/blogModel");

module.exports = async (req, res, next) => {
  const blog = await BlogPost.findOne({ _id: req.params.id });
  if (blog) {
    req.blog = blog; // Attach blog to the request object
    next();
  } else {
    res.errorStatusCode = 404;
    next(
      new Error("Blog not found. Please check if this blog exists", {
        cause: `Searched blog post ID: ${req.params.id}`,
      })
    );
  }
};
