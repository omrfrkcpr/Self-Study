"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

module.exports = (req, res, next) => {
  //! Filtering
  // URL?filter[key1]=value1&filter[key2]=value2
  const filter = req.query?.filter || {};

  //* Searching => gelen ifaade içerisinde geçiyor mu geçmiyor mu
  // URL?search[key1]=value1&search[key2]=value2
  const search = req.query?.search || {};
  for (let key in search) {
    search[key] = { $regex: search[key] };
  }

  //? Sorting
  // URL?sort[key1]=asc&sort[key2]=desc
  const sort = req.query?.sort || {};

  //* Pagination
  // url?page=3&limit=10
  //! Limit
  let limit = Number(req.query?.limit); // limit() metodu number bekler diyelim
  limit = limit > 0 ? limit : 20;
  //? Page
  let page = Number(req.query?.page);
  page = page > 0 ? page - 1 : 0;

  //! Skip => atlanacak veri sayısı
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : page * limit;

  res.getModelList = async function (
    Model,
    customFilter = {},
    populate = null
  ) {
    return await Model.find({ ...filter, ...customFilter, ...search })
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .populate(populate);
  };
  res.getModelListDetails = async (Model, customFilter = {}) => {
    const data = await Model.find({ ...filter, ...customFilter, ...search });

    let details = {
      filter,
      customFilter,
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
    details.pages.next =
      details.pages.next > details.pages.totalPage ? false : details.pages.next;
    if (details.total <= limit) details.pages = false;
    return details;
  };

  next();
};
