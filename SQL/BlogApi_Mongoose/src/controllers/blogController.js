//*Blog Controller

require("express-async-errors");
const { BlogPost, BlogCategory } = require("../models/blogModel");

module.exports.BlogCategoryController = {
  list: async (req, res) => {
    const data = await BlogCategory.find();

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
    console.log(data);
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
    const data = await BlogPost.find().populate("categoryId", "name");
    // const data = await BlogPost.find().populate("categoryId", "name -_id");

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Blog is successfully created",
      blog: data,
    });
  },
  createMany: async (req, res) => {
    const data = await BlogPost.insertMany(req.body.blogs); //* Çoklu veri create etmek için kullanılan yöntem
    //* çoklu veri gönderilirken veriyi json formatında gönderiyoruz:
    //     {
    //         "blogs": [
    //     {
    //       "title": "Blog Title 7",
    //       "content": "Blog Content 7",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 8",
    //       "content": "Blog Content 8",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 9",
    //       "content": "Blog Content 9",
    //       "published": false
    //     }
    //   ]
    // }
    res.status(201).send({
      error: false,
      message: "New Blogs are successfully created",
      blogs: data,
    });
  },
  read: async (req, res) => {
    // const data = await BlogPost.findOne({_id: req.params.id)};
    const data = await BlogPost.findById(req.params.id).populate(
      "categoryId",
      "name"
    );
    // const data = await BlogPost.findById(req.params.id).populate("categoryId", "name -_id");

    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // return new updated data, not old data !
    res.status(202).send({
      error: false,
      message: "Blog is successfully updated",
      updatedBlog: data,
    });
  },
  togglePublished: async (req, res) => {
    const { blogIds } = req.body;
    if (blogIds) {
      const result = await BlogPost.updateMany({ _id: { $in: blogIds } }, [
        { $set: { published: { $not: "$published" } } },
      ]);

      res.status(202).send({
        error: false,
        message: "All draft blogs are successfully published",
        modifiedCount: result.modifiedCount,
      });
    } else {
      res.status(400).send({
        error: true,
        message: "There is no draft blogs",
      });
    }
  },
  destroy: async (req, res) => {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(201).send({
      error: false,
      message: "Blog is successfully deleted",
    });
  },
  destroyAll: async (req, res) => {
    const data = await BlogPost.deleteMany();
    if (data.deletedCount) {
      res.status(201).send({
        error: false,
        message: "All Blogs are successfully deleted",
      });
    } else {
      res.status(404).send({
        error: true,
        message: "There is no blogs to delete",
      });
    }
  },
};
