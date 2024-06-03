"use strict";
/*
    NODE JS SERVER
*/
console.log("hi");
const http = require("node:http");

// const dotenv=require(dotenv)
// dotenv.config()
const dotenv = require("dotenv").config();

//
const PORT = process.env.PORT || 8000;
//http://localhost:8000  // domain
const HOST = process.env.HOST || "127.0.0.1";

/*
http.createServer((parametre1,parametre2)=>{

    console.log("server runned")
})
*/
/*
http.createServer((parametre1,parametre2)=>{

    console.log("server runned")
}).listen(8000)
*/
// 1. param request, 2. param response

// http.createServer((request,response)=>{
/*
const app=http.createServer((req,res)=>{
    res.end('server runned')


    // res.end('bye') // birden fazla olmaz
    // console.log(req.method);
    // console.log("server test")
})
// app.listen(8000)
// app.listen(PORT,()=>console.log('server runned http://127.0.0.1' ))

app.listen(PORT,()=>console.log(`server runned http://${HOST}`))
*/
/* SERVER  */

const app = http.createServer((req, res) => {
  /*
        "/" home page
        "/FS"  fullstack page
        "/DS" data science page
        "CW/api" api page
    */
  /*
    if(req.url=='/'){

        res.end('welcome CW')

    }else if(req.url=='/DS') {

        res.end('welcome DS')

    }else if(req.url=='/FS') {

        res.end('welcome FS')

    }else if(req.url=='/CW/api') {

        res.end('welcome api page')

    }else
        res.end('<h1> no page </h1> ')
  */
  // with statuscode
  // if(req.url=='/' && req.method=='GET'){
  if (req.url == "/") {
    if (req.method == "GET") {
      res.statusCode = 200;
      res.end("welcome CW");
    } else {
      res.statusCode = 403; // default 200 OK
      res.end("you can not use this method ");
    }
  } else if (req.url == "/DS") {
    res.end("welcome DS");
  } else if (req.url == "/FS") {
    res.end("welcome FS");
  } else if (req.url == "/CW/api") {
    res.end("welcome api page");
  } else {
    res.statusCode = 404;
    res.statusMessage = "aradiginiz sayfa yok!";
    // res.mymessage
    res.end("<h1> no page </h1> ");
  }
});

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`));
