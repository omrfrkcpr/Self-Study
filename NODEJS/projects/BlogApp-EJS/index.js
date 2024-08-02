"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection");
/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
    // maxAge: 1000 * 60 * 60 * 24 * 3 // miliseconds // 3 days
  })
);

/* -------------------------------------------------------------------------- */
/*                                  Template                                  */
/* -------------------------------------------------------------------------- */

app.set("view engine", "ejs"); //! express de template engine olarak ejs i kullanacam diye ayar yapıyorum. Ayar yaparken set() metodu kullanılır.
// app.set("views", "./views"); Default klasör
//? Default olarak express klasör olarak views klasörünü arar. Ben istersem bunu da değiştirebilirim.
app.set("views", "./public"); //* views klasörü yerine public klasörünü kullan. Zorunlu bir işlem değil views olarak da kalabilir.

//! express.urlencoded() is a body parser for html post form.
//* Gelen verilerin sadece string olarak ele alnıması istenirse, extended: false özelliği kullanılır, fakat eğer bir JSON nesnesi olarak ele alınması istenirse, extended: true parametresi ile kullanmak gerekir. API hizmeti de sunduğumuz için bizim için uygun olan seçenek {extended: true} olacaktır.
// app.use(express.urlencoded({extended:false}));
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use("/assets", express.static("./public/assets"));
//* /assets uzantısı görürsen bunun için public klasöründeki assetse erişim sağla.

app.use("/libs", express.static("./node_modules")); //! /libs uzantisi gorursen node_modules icerisinde arama yap

//? user control
app.use(require("./src/middlewares/userControl"));

//*Filter,Search,Sort and Pagination
app.use(require("./src/middlewares/findSearchSortPagi"));

// HomePage:
// app.all('/', (req, res) => {
//     res.send("<h1 style='text-align:center;margin-top:150px'>WELCOME TO BLOG API</h1>");
// })
// app.all("/", (req, res) => {
//   if (req.isLogin) {
//     res.send({
//       message: "Welcome to BlogApi",
//       session: req.session,
//       user: req.user
//     });
//   }else {
//     res.send({
//       message: "Welcome to BlogApi",
//       session: req.session,
//     });
//   }
// });

// app.use("/blog", require("./src/routes/blogRoute"));
// app.use("/user", require("./src/routes/user.route"));

app.use("/api/blog", require("./src/routes/blogRoute"));
app.use("/api/user", require("./src/routes/user.route"));
app.use("/", require("./src/routes/views"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// require("./src/configs/sync")()
