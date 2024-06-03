"use strict";
/*
    EXPRESS SERVER
*/

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// npm i express
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("my express message");
});

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`));
// windows + r => netstat -a
