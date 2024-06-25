//* Id control middleware

const { BlogPost } = require("../models/blogModel");

module.exports = {
  validateBlogId: async (req, res, next) => {
    const blog = await BlogPost.findOne({ _id: req.params.id });
    if (blog) {
      next();
    } else {
      res.errorStatusCode = 404;
      throw new Error("Blog not found. Please check, if this blog exists", {
        cause: `Searched blog post ID: ${req.params.id}`,
      });
    }
  },
};
