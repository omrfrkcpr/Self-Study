//* Id control middleware

const { BlogPost } = require("../models/blogModel");
const { User } = require("../models/user.model");

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
  validateUserId: async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.userId });
    if (user) {
      next();
    } else {
      res.errorStatusCode = 404;
      throw new Error("User not found. Please check, if this user exists", {
        cause: `Searched user ID: ${req.params.userId}`,
      });
    }
  },
};
