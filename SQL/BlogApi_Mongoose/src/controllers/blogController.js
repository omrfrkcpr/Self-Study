// blogController.js
require("express-async-errors");
const { BlogPost, BlogCategory } = require("../models/blogModel");

module.exports.BlogCategoryController = {
  list: async (req, res) => {
    // const data = await BlogCategory.find();
    const data = await res.getModelList(BlogCategory);
    res.status(200).send({
      error: false,
      categories: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    res.status(201).send({
      error: false,
      category: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      category: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogCategory.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      category: data,
      newData: await BlogCategory.findOne({ _id: req.params.id }),
    });
  },
  destroy: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.id });
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Category not found",
      });
    }
  },
};

module.exports.BlogPostController = {
  list: async (req, res) => {
    // const userId = req.session.id;
    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .limit(limit)
    //   .skip(skip)
    //   .populate("categoryId")
    //   .populate("userId");
    const data = await res.getModelList(BlogPost);
    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    req.body.userId = req.session.id;
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Blog is successfully created",
      blog: data,
    });
  },
  createMany: async (req, res) => {
    const userId = req.session.id;
    const blogs = req.body.blogs.map((blog) => ({ ...blog, userId }));
    const data = await BlogPost.insertMany(blogs);
    res.status(201).send({
      error: false,
      message: "New Blogs are successfully created",
      blogs: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.find({
      _id: req.params.id,
      userId: req.session.id,
    })
      .populate("categoryId")
      .populate("userId");
    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    const blog = await BlogPost.findOneAndUpdate(
      { _id: req.params.id, userId: req.session.id },
      req.body,
      { new: true }
    );
    if (blog) {
      res.status(202).send({
        error: false,
        message: "Blog is successfully updated",
        updatedBlog: blog,
      });
    } else {
      res.errorStatusCode = 401;
      throw new Error(
        "You must be logged in and be the owner to update this blog post"
      );
    }
  },
  togglePublished: async (req, res) => {
    const { blogIds } = req.body;
    const sessionId = req.session.id;
    if (blogIds) {
      const matchingBlogs = await BlogPost.find({
        _id: { $in: blogIds },
        userId: sessionId,
      });
      if (matchingBlogs.length > 0) {
        const result = await BlogPost.updateMany(
          { _id: { $in: blogIds }, userId: sessionId },
          [{ $set: { published: { $not: "$published" } } }]
        );
        if (result.modifiedCount > 0) {
          res.status(202).send({
            error: false,
            message: "All draft blogs are successfully published",
            modifiedCount: result.modifiedCount,
          });
        } else {
          res.status(400).send({
            error: true,
            message: "There are no blogs to publish!",
          });
        }
      } else {
        res.status(400).send({
          error: true,
          message: "No matching blogs found for the user",
        });
      }
    } else {
      res.status(400).send({
        error: true,
        message: "Blog IDs are required",
      });
    }
  },
  destroy: async (req, res, next) => {
    try {
      const blog = await BlogPost.findOneAndDelete({
        _id: req.params.id,
        userId: req.session.id,
      });
      if (blog) {
        res.status(201).send({
          error: false,
          message: "Blog is successfully deleted",
        });
      } else {
        res.status(401).send({
          error: true,
          message: "You are not authorized to delete this blog post",
        });
      }
    } catch (error) {
      next(error);
    }
  },
  destroyAll: async (req, res, next) => {
    try {
      const data = await BlogPost.deleteMany({ userId: req.session.id });
      if (data.deletedCount) {
        res.status(201).send({
          error: false,
          message: "All your blogs are successfully deleted",
        });
      } else {
        res.status(404).send({
          error: true,
          message: "There are no blogs to delete",
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
