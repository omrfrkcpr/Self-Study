// ? =========================================================
// ?                    FUNCTIONS
// ?==========================================================

//!----------------------------------------------------------
//! 2.METHOD  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//! In function expression and arrow func methods, the function must be defined first and then called. Otherwise you will get an error.
console.log("******** 2- EXPRESSION*******");

//* Example1: odd-even control
//**********************************************************/
/*
const isEvenOdd = function (num) {
  return num % 2 == 0 ? `${num} : Even Number` : `${num} : Odd Number`;
};
alert(isEvenOdd(6));
alert(isEvenOdd(3));
*/

//* Example2: biggest number
//**********************************************************/

const biggestNum = function () {
  let biggest = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }
  }
  return biggest;
};

console.log(biggestNum(90, 345, 123, 23, 545, 112, 5454, 76767, 22));

//& Alternative Method
/*
const buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) enBuyuk = a;
  else if (b > a && b > c) enBuyuk = b;
  else enBuyuk = c;

  return enBuyuk;
};

alert(buyukBul(3, 5, 9));
*/
