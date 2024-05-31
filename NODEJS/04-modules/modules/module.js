"use strict";

console.log("module page");

//* Single Function
// function testFunction() {
//   console.log("this is a test function");
// }

// module.exports = testFunction;
// module.exports = testFunction(){
//   console.log("this is a test function");
//};

//* Multi Function

// function testFunction_A() {
//   console.log("this is a test function a");
// }
// function testFunction_B() {
//   console.log("this is a test function b");
// }
// function testFunction_C() {
//   console.log("this is a test function b");
// }

//? Array
// module.exports = [testFunction_A, testFunction_B, testFunction_C];

//? Object
// module.exports = {
//   testA: testFunction_A,
//   testB: testFunction_B,
//   testC: testFunction_C,
// };

//? Shorthand
// module.exports.testFunction_A = function () {
//   console.log("this is a test function a");
// };
// module.exports.testFunction_B = function () {
//   console.log("this is a test function b");
// };
// module.exports.testFunction_C = function () {
//   console.log("this is a test function b");
// };

//? Shorthand 2
// module.exports = {
//   testFunction_A: function () {
//     console.log("this is a test function a");
//   },
//   testFunction_B: function () {
//     console.log("this is a test function a");
//   },
//   testFunction_C: function () {
//     console.log("this is a test function a");
//   },
// };
