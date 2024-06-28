"use strict";
require("express-async-errors");
const express = require("express");
require("dotenv").config();
const { mongooseConnection } = require("./startup/mongooseConnection");
const PORT = process.env?.PORT || 8000;

const app = express();
app.use(express.json());

//!  CORS
const cors = require("cors");
// app.use(cors()); // Tum url isteklerine cevap ver.
app.use(
  cors({
    origin: "http://localhost:3000", // sondaki slash yok!
    method: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.all("/", (req, res) => {
  res.send("Hello TutorialApp");
});

app.use("/tutorials", require("./routes/tutorialRoute"));

app.use(require("./middlewares/errorHandler"));
mongooseConnection();
app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));
