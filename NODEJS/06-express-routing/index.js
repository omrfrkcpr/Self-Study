// installation
// https://expressjs.com/en/starter/installing.html
// kill $(lsof -t -i:8000) portu öldürmek

"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     // res.write('Hello World)
//     // res.end()
//     res.send('Hello World!')
// })

//* all requests
// app.all('/', (req, res, next) => {  // tüm istekler
//     console.log('req >> ', req);
//     next();
// })

//* api methods
// app.get('/', (req, res) => {res.send('GET method called')}) // listeleme ve/veya bilgi almak için
// app.post('/', (req, res) => {res.send('POST method called')}) // yeni bir kullanıcı veya bilgi kaydedecekseniz
// app.put('/', (req, res) => {res.send('PUT method called')}) // bilgi güncellemesi yapmak için
// app.patch('/', (req, res) => {res.send('PATCH method called')}) // bilgi güncellemesi yapmak için
// app.delete('/', (req, res) => {res.send('DELETE method called')}) // silme işlemi

// app.get("/elbise/kadin", (req, res) => {
//   res.send({ message: "GET method called" });
// });
// http://127.0.0.1:8000/elbise/kadin

//* routing
// app.get('/elbise', (req, res) => {res.send({message: 'GET method called (elbise)'})})
// app.get('/elbiseler', (req, res) => {res.send({message: 'GET method called (elbiseler)'})})
// yerine (ler)?
// app.get("/elbise(ler)", (req, res) => {
//   console.log(req.url);
//   res.send({ message: "GET method called (elbise(ler))" });
// });

//* regex
// app.get(/test/, (req, res) => { // Icerisinde test gecmeli
//   res.send("GET method called");
// });
// app.get(/test$/, (req, res) => {
//   // test ile bitmeli.
//   res.send("GET method called");
// });
// app.get(/^\/*test/, (req, res) => {
//   // test ile baslamali
//   res.send("GET method called");
// });

//* url params
// app.get("/:userId/:productId", (req, res) => {
//   const { userId, productId } = req.params;
//   console.log(userId, productId);
//   //   res.send(req.params);
//   //   res.send({ userId: userId, productId: productId });
//   res.send({ userId, productId });
// });

//* response
// app.get("/:userId/:productId", (req, res) => {
//   res.send({
//     protocol: req.protocol,
//     hostname: req.hostname,
//     method: req.method,
//     url: req.url,
//     params: req.params,
//     path: req.path,
//     query: req.query,
//     body: req.body,
//   });
// });

//* query
// app.get("/", (req, res) => {
//   // http://127.0.0.1:8000/?name=test&surname=user
//   res.send({
//     query: req.query,
//   });
//   /*
//   {
//     "query":
//         {
//             "name": "test",
//             "surname": "user"
//         }
//   }
//   */
// });

//! ACHTUNG!
// http://127.0.0.1:8000/test-user/elbise/pantalon/kadin-pantalon
// app.get(
//   "/:name-:surname/:topCategory/:subCategory/:gender-:genderCategory",
//   (req, res) => {
//     // res.send(req.params)
//     res.send({
//       name: req.params.name,
//       surname: req.params.surname,
//       topCategory: req.params.topCategory,
//       subCategory: req.params.subCategory,
//       gender: req.params.gender,
//       genderCategory: req.params.genderCategory,
//     });
//   }
// );

//* HTTP Response Codes
//https://restfulapi.net/http-status-codes/
// HTTP defines these standard status codes that can be used to convey the results of a client’s request. The status codes are divided into five categories.

// 1xx: Informational – Communicates transfer protocol-level information.
// 2xx: Success – Indicates that the client’s request was accepted successfully.
// 3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.
// 4xx: Client Error – This category of error status codes points the finger at clients.
// 5xx: Server Error – The server takes responsibility for these error status codes.

// app.get("/", (req, res) => {
//   // res.send(req.params)
//   //   res.status(400).send("Hello World");
//   res.status(200).send("Hello World"); // default = 200 if successfull
//   //   res.status(305).send("Hello World");
// });

//* EXTRA
// app.get("/", (req, res) => {
//   res.redirect("https://www.google.com");
// });
// app.get("/about", (req, res) => {
//   res.send("about");
// });

//* File
// app.get("/file", (req, res) => {
//   res.sendFile(`${__dirname}/README.md`);
// });
// app.get("/download", (req, res) => {
//   res.download("./README.md", "express routing");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
