module.exports = (req, res, next) => {
  //! Filtering
  // URL?filter[key1]=value&filter[key2]=value2 => url array parameter
  const filter = req.query?.filter || {};
  console.log("Filter: ", filter);

  //! Searching => gelen ifade icerisinde geciyor mu?
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  const search = req.query?.search || {};
  // console.log("Search: ", search);
  // {title: "Testuser1", content: "Testuser"} => {title: {$regex: "Testuser1", content:{ $regex: "Testuser"}}}
  for (let key in search) {
    search[key] = { $regex: search[key] };
  }
  console.log("Search2: ", search);

  //! Sorting
  // https://mongoosejs.com/docs/api/query.html#Query.prototype.sort()
  // URL?sort[key1]=value&sort[key2]=value2
  const sort = req.query?.sort || {};
  // 1: A-Z, -1:Z-A (deprecated)
  // asc: A-Z, desc: Z-A
  console.log("Sort: ", sort);

  //! Pagination
  // URL?page=1&limit=10
  // => mongoose => limit() ve skip()
  //? URL den gelen degerler her zaman string! Bu yuzden number a convert et.
  let page = Number(req.query?.page);
  // page = page > 0 ? page : 1;
  page = page > 0 ? page - 1 : 0;
  console.log("Page: ", page);

  //! Limit
  // URL?limit=10
  //? URL den gelen degerler her zaman string! Bu yuzden number a convert et.
  let limit = Number(req.query?.limit);
  limit = limit > 0 ? limit : 10;
  console.log("Limit: ", limit);

  //! Skip => atlanacak veri sayisi
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : page * limit;

  // const data = await BlogPost.find({ ...filter, ...search })
  //   .sort(sort)
  //   .limit(limit)
  //   .skip(skip)
  //   .populate("categoryId")
  //   .populate("userId");

  //* response a ekliyoruz
  res.getModelList = async function (Model) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .limit(limit)
      .skip(skip);
  };

  next();
};
