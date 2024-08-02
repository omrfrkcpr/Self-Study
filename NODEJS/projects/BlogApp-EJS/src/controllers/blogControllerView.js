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
    const data = await res.getModelList(BlogPost, [
      {
        path: "blogCategoryId",
        select: "name -_id",
      },
      { path: "userId" },
    ]);

    // console.log(req.query)
    // console.log(req.session)

    const categories = await BlogCategory.find();
    const recentPosts = await BlogPost.find()
      .sort({ createdAt: "desc" })
      .limit(3);
    // console.log(req.url);

    if (req.url.includes("?")) {
      //  req.url += '&'
      if (req.url.includes("page=")) {
        req.url = req.url.split("&page=")[0];
      }
    } else {
      req.url += "?";
    }

    // res.status(200).send({
    //   error: false,
    //   details: await res.getModelListDetails(BlogPost),
    //   blogs: data,
    // });
    // res.render("index", {
    //   posts: data,
    //   categories,
    //   selectedCategory: req.query?.filter?.blogCategoryId,
    //   recentPosts,
    //   details: await res.getModelListDetails(BlogPost),
    //   pageUrl: req.url,
    // });
    res.render("postList", {
      posts: data,
      categories,
      selectedCategory: req.query?.filter?.blogCategoryId,
      recentPosts,
      details: await res.getModelListDetails(BlogPost),
      pageUrl: req.url,
      user: req.session
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
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate(
      "blogCategoryId"
    );
    // res.status(200).send({
    //   error: false,
    //   blog: data,
    // });
// console.log("merhaba",data)
    res.render('postRead',{post:data,user:req.session})
  },
  update: async (req, res) => {
    // const data = await BlogPost.findByIdAndUpdate(req.params.id,req.body,{new:true}) // {new:true} => return new data
    const data = await BlogPost.updateOne({ _id: req.params.id }, req.body); //* datayı döndürmez yaptığı işlemin özetini döner. O nedenle bu yöntemde newData şeklinde sorgu yazıp güncellenmiş halini gönderebiliriz

    res.status(202).send({
      error: false,
      blog: data,
      newData: await BlogPost.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    if (data.deletedCount) {
      // console.log(req);
      // console.log(
      //   req.rawHeaders[
      //     req.rawHeaders.findIndex((item) =>
      //       item.includes("http://127.0.0.1:8000")
      //     )
      //   ]
      // );
      // res.redirect('/post')
      res.redirect(
        req.rawHeaders[
          req.rawHeaders.findIndex((item) =>
            item.includes("http://127.0.0.1:8000")
          )
        ].includes(req.params.postId)
          ? "/post"
          : req.rawHeaders[
              req.rawHeaders.findIndex((item) =>
                item.includes("http://127.0.0.1:8000")
              )
            ]
      );
    } else {
      throw new Error("Post not found!");
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
      blog: data,
    });
  },
};
