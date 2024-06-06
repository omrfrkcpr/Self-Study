"use strict";

const http = require("http");
const url = require("url");

const routeHandler = (req, res) => {
  console.log(req.url);
  console.log(req.method);
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  if (parsedUrl.pathname == "/" && req.method == "GET") {
    res.write("Hello World");
    res.end();
    // if (req.url == "/" && req.method == "GET") {
    //   res.write("Hello World");
    //   res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
};

const server = http.createServer(routeHandler);
server.listen(3000);
