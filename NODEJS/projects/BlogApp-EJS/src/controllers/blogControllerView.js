//*Blog Controller
require("express-async-errors"); //* hata fırlatmak
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

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.id });
    console.log(data);
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Blog post not found",
      });
    }
  },
};

module.exports.BlogPostController = {
  list: async (req, res) => {
    // const data = await res.getModelList(BlogPost, "blogCategoryId");
    const data = await res.getModelList(BlogPost, [
      {
        path: "blogCategoryId",
        select: "name -_id",
      },
      { path: "userId" },
    ]);
    const categories = await BlogCategory.find();

    res.render("index", {
      posts: data,
      categories,
      selectedCategory: req.query?.filter?.blogCategoryId,
    });
  },
  create: async (req, res) => {
    // req.body.userId = req.session.id
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.id }).populate(
      "blogCategoryId"
    );
    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    res.status(202).send({
      error: false,
      blog: data,
      newData: await BlogPost.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.id });
    console.log(data);
    // res.sendStatus(data.deletedCount ? 204 : 404)
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Blog post not found",
      });
    }
  },

  deleteMany: async (req, res) => {
    // const data = await BlogPost.deleteMany() //* optionda ekleyebilirsiniz.
    const data = await BlogPost.deleteMany({ published: false });
    if (data.deletedCount) {
      res.status(200).send({
        error: false,
        message: "All not published blog posts deleted successfully",
      });
    } else {
      res.status(404).send({
        error: true,
        message: "No blog not published",
      });
    }
  },
  createMany: async (req, res) => {
    const data = await BlogPost.insertMany(req.body.blogs); // Çoklu veri create etmek için kullanılan yöntem JSON
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
};
