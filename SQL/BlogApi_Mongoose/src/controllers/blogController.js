//*Blog Controller

const { BlogPost } = require("../models/blogModel");

module.exports.BlogPostController = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  destroy: async (req, res) => {
    const data = await BlogPost.findOneAndDelete({ _id: req.params.id });
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
};
