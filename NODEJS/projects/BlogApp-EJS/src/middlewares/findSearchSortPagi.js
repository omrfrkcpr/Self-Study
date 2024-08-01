module.exports = (req,res,next) => {
 //! Filtering
    // URL?filter[key1]=value1&filter[key2]=value2 => url array parameter
    // console.log(req.query)
    const filter = req.query?.filter || {};
    console.log("filter: ", filter);

    //* Searching => gelen ifaade içerisinde geçiyor mu geçmiyor mu
    // URL?search[key1]=value1&search[key2]=value2 => url array parameter
    //https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    const search = req.query?.search || {};
    console.log("search: ", search);
    //* { title: 'Testuser1', content: 'Testuser' } => { title: {$regex:'Testuser1'}, content:{ $regex: 'Testuser'} }
    for (let key in search) {
      // search["title"] = {$regex : search["title"]}
      search[key] = { $regex: search[key] };
    }
    console.log("search2: ", search);

    //? Sorting
    //https://mongoosejs.com/docs/api/query.html#Query.prototype.sort()
    // URL?sort[key1]=value1&sort[key2]=value2 => url array parameter
    // 1:A-Z - -1:Z-A deprecated
    // asc:A-Z - desc:Z-A
    const sort = req.query?.sort || {};

    //* Pagination
    // url?page=3&limit=10

    // =>mongoose =>  limit() ve skip()

    //! Limit
    let limit = Number(req.query?.limit); // limit() metodu number bekler diyelim
    limit = limit > 0 ? limit : 20;
    console.log(typeof limit, limit);

    //? Page
    let page = Number(req.query?.page);
    // page = page > 0 ? page : 1
    page = page > 0 ? page - 1 : 0; // Backend 'de sayfa sayısı her zmaan page-1 olarak hesaplanmalı. Kullanıcı yine page=1 olarak görecek ama hesaplama yapılruıken page-1 olarak hesaplama yapacağız. skip metodundan dolayı bunu yapıyoruz
    console.log(typeof page, page);

    //! Skip => atlanacak veri sayısı
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : page * limit;
    console.log(typeof skip, skip);

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

    //*biz ekliyoruz
    res.getModelList = async function (Model,populate=null) {
      return await Model.find({ ...filter, ...search })
        .sort(sort)
        .limit(limit)
        .skip(skip)
        .populate(populate);
    }
    res.getModelListDetails = async (Model) => {
        const data = await Model.find({ ...filter, ...search });

        let details = {
          filter,
          search,
          sort,
          skip,
          limit,
          page,
          pages: {
            previous: page > 0 ? page : false,
            activePage: page + 1,
            next: page + 2,
            totalPage: Math.ceil(data.length / limit),
          },
          total: data.length,
        };
        details.pages.next = details.pages.next > details.pages.totalPage ? false : details.pages.next;
        if(details.total <= limit) details.pages = false
        return details;
    }

    next()
}