# BLOG Project with Mongoose

## MONGOOSE

https://mongoosejs.com/

### What? Why?

![](./mongoose.png)

## BLOG API

### ERD:

```
+-------------------+      +--------------------+
|   BlogCategory    |      |     BlogPost       |
+-------------------+      +--------------------+
| _id (ObjectId)    |<-----| _id (ObjectId)     |
| name (String)     |      | blogCategoryId     |
| createdAt         |      | title (String)     |
| updatedAt         |      | content (String)   |
+-------------------+      | published (Boolean)|
                           | createdAt          |
                           | updatedAt          |
                           +--------------------+

```

![ERD](./erdBlogAPI.png)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    readme.md
    📦src
         ┣ 📂configs
         ┃     ┗ 📜dbConnection.js
         ┣ 📂controllers
         ┃     ┗ 📜blogController.js
         ┣ 📂middlewares
         ┃     ┗ 📜errorHandler.js
         ┣ 📂models
         ┃     ┗ 📜blogModel.js
         ┗ 📂routes
         ┃     ┗ 📜blogRoute.js
```

