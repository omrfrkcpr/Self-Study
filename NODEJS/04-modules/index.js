"use strict";

console.log("module lesson - index.js");
// require("./modules/module.js");
// require("./modules/module");
// require("./modules/"); // default index.js arar

//* Single Function
// const testFuncFromModule = require("./modules/module");
// testFuncFromModule();

//* Multi Function - (Destructuring)
//? Array
// const [testFunc_A, testFunc_B, testFunc_C] = require("./modules/module");
// testFunc_A();
// testFunc_B();
// testFunc_C();

//? Object
// const { testA: t_A, testB, testC } = require("./modules/module");
// t_A();
// testB();
// testC();

//? Shorthand
// const {
//   testFunction_A: test_A,
//   testFunction_B,
//   testFunction_C,
// } = require("./modules/module");
// test_A();
// testFunction_B();
// testFunction_C();

//? Shorthand 2
// const {
//   testFunction_A,
//   testFunction_B,
//   testFunction_C,
// } = require("./modules/module");

// testFunction_A();
// testFunction_B();
// testFunction_C();

//! buildin -- (https://www.w3schools.com/nodejs/ref_modules.asp)
// console.log(require("module").builtinModules);
require("http"); // first check if it exists in node_modules, then check it in global
require("node:http"); // check directly in global
require("dotenv").config(); // call config func from dotenv module. ENV dosyasindakileri alip, process.ENV icine ekliyor
// console.log(process.env);
console.log(process.env.ENV_HOST);
console.log(process.env.ENV_PORT);
