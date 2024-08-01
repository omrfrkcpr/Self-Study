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
    // //! Filtering
    // // URL?filter[key1]=value1&filter[key2]=value2 => url array parameter
    // // console.log(req.query)
    // const filter = req.query?.filter || {};
    // console.log("filter: ", filter);

    // //* Searching => gelen ifaade içerisinde geçiyor mu geçmiyor mu
    // // URL?search[key1]=value1&search[key2]=value2 => url array parameter
    // //https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    // const search = req.query?.search || {};
    // console.log("search: ", search);
    // //* { title: 'Testuser1', content: 'Testuser' } => { title: {$regex:'Testuser1'}, content:{ $regex: 'Testuser'} }
    // for (let key in search) {
    //   // search["title"] = {$regex : search["title"]}
    //   search[key] = { $regex: search[key] };
    // }
    // console.log("search2: ", search);

    // //? Sorting
    // //https://mongoosejs.com/docs/api/query.html#Query.prototype.sort()
    // // URL?sort[key1]=value1&sort[key2]=value2 => url array parameter
    // // 1:A-Z - -1:Z-A deprecated
    // // asc:A-Z - desc:Z-A
    // const sort = req.query?.sort || {};

    // //* Pagination
    // // url?page=3&limit=10

    // // =>mongoose =>  limit() ve skip()

    // //! Limit
    // let limit = Number(req.query?.limit); // limit() metodu number bekler diyelim
    // limit = limit > 0 ? limit : 20;
    // console.log(typeof limit, limit);

    // //? Page
    // let page = Number(req.query?.page);
    // // page = page > 0 ? page : 1
    // page = page > 0 ? page - 1 : 0; // Backend 'de sayfa sayısı her zmaan page-1 olarak hesaplanmalı. Kullanıcı yine page=1 olarak görecek ama hesaplama yapılruıken page-1 olarak hesaplama yapacağız. skip metodundan dolayı bunu yapıyoruz
    // console.log(typeof page, page);

    // //! Skip => atlanacak veri sayısı
    // let skip = Number(req.query?.skip);
    // skip = skip > 0 ? skip : page * limit;
    // console.log(typeof skip, skip);

    // const data = await BlogPost.find({}) = BlogPost.find()
    // const data = await BlogPost.find(filter);
    // const data = await BlogPost.find({filter,search}); => {filter:{ userId: '667d10dc03839026052691ab', published: '0' },search:{ title: { '$regex': 'Testuser1' }, content: { '$regex': 'Testuser' } }} // wrong
    // const [a,b,...x] = [12,13,56,6455,456] => rest => toplama
    // function(a,...x) => rest
    // const data = await BlogPost.find({ ...filter, ...search }); // spread => yayma

    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .limit(limit)
    //   .skip(skip);

    //! operator kullanımı => https://www.mongodb.com/docs/manual/reference/operator/query/
    // const query = req.query?.q || '';

    // const data = await BlogPost.find({
    //   $or: [
    //     { title: { $regex: query, $options: "i" } }, //* i => insensitive
    //     { content: { $regex: query, $options: "i" } },
    //   ],
    // });

    // const data = await res.getModelList(BlogPost, "blogCategoryId");
    const data = await res.getModelList(BlogPost, [
      {
        path: "blogCategoryId",
        select: "name -_id",
      },
      { path: "userId" },
    ]);
    //! populate v2 => populate({path:"blogCategoryId",select:"name -id"})
    //! multi populate => populate([ {path: "blogCategoryId", select: "name -_id", }, { path: "userId" }, ])
    //! multi populate => populate({path: "blogCategoryId", select: "name -_id", }).populate({ path: "userId" })
    // const data = await BlogPost.find({ published: true, }).populate(
    //   "blogCategoryId",
    //   "name -_id"
    // ); //* ilk parametre alanın adı. Eğer istemdğimiz alanlar varsa bunları belirtebiliriz. istedğimiz veya istemediğimiz alanları aralara boşluk koyarak ekleyebiliriz . İstemediğimiz alanların başına "-" koyarak bunları getirme diyebiliriz.

    //*http://127.0.0.1:8000/blog/post?limit=22&filter[userId]=667d10dc03839026052691ab&search[title]=test&search[content]=test 1&sort[title]=desc
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(BlogPost),
      blogs: data,
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
    // const data = await BlogPost.findById(req.params.id); //* sadce id secenegini kabul eder.
    // const data = await BlogPost.findOne({published: false });
    // const data = await BlogPost.findOne({ _id: req.params.id }); //* diğer seçenekleri de kabul eder.
    const data = await BlogPost.findOne({ _id: req.params.id }).populate(
      "blogCategoryId"
    );
    res.status(200).send({
      error: false,
      blog: data,
    });
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
    // const data = await BlogPost.findByIdAndDelete(req.params.id);
    // if (data) {
    // //   res.sendStatus(204);
    // res.status(200).send({
    //     error: false,
    //     message: "Blog post deleted successfully",
    //     deletedData : data
    // })
    // } else {
    //   res.sendStatus(404);
    // }

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
