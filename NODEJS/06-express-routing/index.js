// kurulum
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
app.get("/", (req, res) => {
  // http://127.0.0.1:8000/?name=test&surname=user
  res.send({
    query: req.query,
  });
  /*
  {
    "query": 
        {
            "name": "test",
            "surname": "user"
        }
  }
  */
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
