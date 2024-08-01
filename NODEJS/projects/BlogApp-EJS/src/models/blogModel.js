//? Blog Models
const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema(
//   {
//     //_id : Auto Generated
//     // fieldName: String, // shorthand
//     fieldName: {
//       type: String, // Veri Tipi
//       default: "true", // Veri gelmezse eklenecek değer
//       required: true, // Gelen veriden zorunlu olarak olsun mu ?
//       required: [true, "Error-Message"], //* Hata mesajını özelleştirme
//       trim: true, // Gelen veriyi trimden geçir
//       unique: true, // Benzersiz olmalı
//       index: true, // Daha hızlı erişim olsun mu ?
//       select: true, // Data çağrıldığında bu alan gelsin mi gelmesin mi ?
//       validate: [
//         function (data) {
//           return true;
//         },
//         "Error-Message",
//       ], //* veriyi kontrolden geçiren fonksiyon
//       enum: [["0", "1", "2", "3"], "error-message"], //* Choices / Pattern / Limit
//       get: function (data) {
//         return data;
//       }, // Data çağrılırken çalışan fonksiyon
//       set: function (data) {
//         return data;
//       }, // Datayı kaydederken çalışan fonksiyon
//     },
//   },
//   {
//     collection:'collectionName',
//     timestamps: true // CreatedAt ve UpdatedAt auto
//   }
// );

const blogCategorySchema = new mongoose.Schema({
  name : {
    type: String,
    trim:true,
    required: true,
    unique: true
  }
},{
  collection:"blogCategory",
  timestamps: true
})

const blogPostSchema = new mongoose.Schema(
  {
    // _id
    userId: {
      type: mongoose.Schema.Types.ObjectId, //ForeingKey, relationalId
      required: true,
      ref: "User",
    },
    blogCategoryId: {
      type: mongoose.Schema.Types.ObjectId, //ForeingKey, relationalId
      required: true,
      ref: "BlogCategory",
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    // createdAt
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

// const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

// module.exports = {
//     BlogPost:BlogPostModel
// }

module.exports = {
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
  BlogCategory : mongoose.model("BlogCategory",blogCategorySchema)
};