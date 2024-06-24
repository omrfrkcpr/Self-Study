"use strict";

const { BlogPost, BlogCategory } = require("../models/blogModel.js");

module.exports = async () => {
  const blogCategory = await BlogCategory.findOne();
  // console.log(blogCategory._id)
  if (blogCategory) {
    await BlogPost.updateMany(
      {
        categoryId: { $exists: false }, // categoryId alanı olmayanları getir ve onlara categoryId ataması yap
      },
      {
        categoryId: blogCategory._id,
      }
    );
  }
  console.log("**Synchronized!**");
};
