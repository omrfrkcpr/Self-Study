"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//* DATA RECEIVING:
//? Accept JSON and convert to object:
app.use(express.json())
//? Accept TEXT:
app.use(express.text())
//? Accept Form-Data:
// extended must be define. (if true, it supported nested form-data.)
app.use(express.urlencoded({ extended: true}))
/*
<form>
    <input name="email"/>
    <input name="password"/>
    <button type="submit">Gönder</button>
</form>
*/
// body gönderdiğimiz veri
/*{ 
    "email": "abc@xyz.com",
    "password": "P@ssw0rd"
}*/
/* ------------------------------------------------------- *
app.post('/login', (req, res) => {
    res.send({
        body: req.body,
        message: 'hello'
    })
})
/* ------------------------------------------------------- */
//* Allow staticfiles:
// Call staticFiles from real-path
app.use('/static', express.static('./public/images'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));