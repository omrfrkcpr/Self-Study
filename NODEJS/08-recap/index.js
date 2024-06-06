"use strict";

/* ---------------------------------- */
/*       NODE.JS HTTP SERVER          */
/* ---------------------------------- */

// const http = require("http");
// const url = require("url");

// const routeHandler = (req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   const parsedUrl = url.parse(req.url, true);
//   console.log(parsedUrl);
//   if (parsedUrl.pathname == "/" && req.method == "GET") {
//     res.write("Hello World");
//     res.end();
//     // if (req.url == "/" && req.method == "GET") {
//     //   res.write("Hello World");
//     //   res.end();
//   } else {
//     res.write("Not Found");
//     res.end();
//   }
// };

// const server = http.createServer(routeHandler);
// server.listen(3000);

/* ---------------------------------- */
/*          EXPRESS.JS SERVER         */
/* ---------------------------------- */

const express = require("express");
const app = express();
const products = require("./products.json");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server started on ${PORT} Port`);
});

//* app.use() kullaniminda genel olan url leri sona koy. Use ilk calisani kullanir.
// app.use("/products", (req, res) => {
//   if (req.method == "GET") {
//     res.send("hello GET Products");
//   } else if (req.method == "POST") {
//     res.send("hello POST Products");
//   } else {
//     res.send("Request is not GET or POST Products");
//   }
// });
// app.use("/", (req, res) => {
//   if (req.method == "GET") {
//     res.send("hello GET");
//   } else if (req.method == "POST") {
//     res.send("hello POST");
//   } else {
//     res.send("Request is not GET or POST");
//   }
// });

// =========================================

app.use(express.json()); //* gelen body bilgisini parse edip anlaşılabilir yapıyı dönüştürür.

// ===========================================

//* Middleware ile controller islemi yapiyor. Authentication check
app.use((req, res, next) => {
  req.user = "Omer";
  next();
});

app.use((req, res, next) => {
  if (req.query.user === "Omer") {
    next();
  } else {
    res.status(401).send("Not authorized");
  }
});

//! Example Middlewares

// app.use((req, res, next) => {
//   if (req.query.user) {
//     next();
//   } else {
//     // res.status(401).send("Not authorized");
//     req.query.user = {
//       login: false,
//     };
//     next();
//   }
// });

// app.use((req, res, next) => {
//   if (req.query.admin) {
//     next();
//   } else {
//     // res.status(401).send("Not authorized");
//     req.query = {
//       ...req.query,
//       admin: false,
//     };
//     next();
//   }
// });

// ============================================
//* http://localhost:3000?user=Omer
app.get("/", (req, res) => {
  res.send({ message: `Hello ${req.query.user}` });
});

//* http://localhost:3000/products?user=Omer&page=1&limit=10&category=Shop
app.get("/products", (req, res) => {
  console.log(req.query);
  // const page = req.query.page || 1;
  // const limit = req.query.limit || 10;
  // const category = req.query.category || "all";
  const { page = 1, limit = 10, category = "" } = req.query;
  //? Album.findAll().limit(3) => Select * from album Limit 3

  res.status(200).send({
    status: res.statusCode,
    message: "Hello Products",
    products: products
      .filter((product) => product.category.includes(category))
      .slice((page - 1) * limit, page * limit),
    page,
    limit,
    category,
  });
  // res.json(
  //   products
  // );
});

app.post("/products", (req, res) => {
  console.log(req);
  products.push(req.body);
  res.send({
    data: req.body,
    products,
  });
});

app.get("/products/:id", (req, res) => {
  if (products.filter((item) => item.id == req.params.id).length) {
    res.send(products.find((item) => item.id == req.params.id));
  } else {
    res.status(404).send({
      error: true,
      message: "Not Found",
    });
  }
});
