//? Blog Models

const mongoose = require("mongoose");

/*
const exampleSchema = new mongoose.Schema(
  {
    // _id: auto generated
    // fieldName: string, // shortHand
    fieldName: {
      type: String, // data type
      default: "example default value", // default value
      required: true, // requirement type
      required: [true, "example error message"], // requirement type
      unique: true,
      trim: true, // data.trim()
      select: true, // Wh-en the data calls, should this field come?
      minlength: 3,
      maxlength: 50,
      lowercase: true,
      uppercase: true,
      validate: [
        function (data) {
          return true;
        },
        "example error message",
      ],
      validate(value) {
        if (!value.match(/^[a-zA-Z0-9]+$/)) {
          throw new Error("Name must be alphanumeric");
        }
      },
      enum: [["0", "1", "2"], "example error message"], // Choices / Pattern / Limit
      get: function (data) {
        return data;
      }, // when the data be getted
      set: function (data) {
        return data;
      }, // when the data be setted
    },
  },
  {
    collection: "example collectionName",
    timestamps: true, // should createdAt and updatedAt be auto generated
  }
);
*/

const blogPostSchema = new mongoose.Schema(
  {
    // _id
    title: {
      type: String,
      trim: true,
      required: [true, "Please add a title for your post"],
      maxlength: [50, "Title can not be more than 50 characters"],
      minlength: [3, "Title can not be less than 3 characters"],
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Please add a content for your post"],
      maxlength: [5000, "Content can not be more than 5000 characters"],
      minlength: [10, "Content can not be less than 10 characters"],
    },
    published: {
      type: Boolean,
      default: true, // false: draft
    },
    // createdAt
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);
