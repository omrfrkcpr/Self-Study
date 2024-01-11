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

const isEvenOdd = function (num) {
  return num % 2 == 0 ? `${num} : Even Number` : `${num} : Odd Number`;
};
console.log(isEvenOdd(6));
console.log(isEvenOdd(3));

//* Example2: biggest number
//**********************************************************/

const bigSmallNum = function () {
  console.log(arguments);
  let biggest = arguments[0];
  let smallest = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }
  //   const minMax = [smallest, biggest];
  return `Smallest: ${smallest} | Biggest: ${biggest}`;
};

console.log(bigSmallNum(90, 345, -100, 912834, 545, 112, 5454, 1, 22));

//& Alternative Method
/*
const biggestNum = function (a, b, c) {
  let biggest;

  if (a > b && a > c) biggest = a;
  else if (b > a && b > c) biggest = b;
  else biggest = c;

  return biggest;
};

alert(biggestNum(3, 5, 9));
*/

//* Example3: nested function
//**********************************************************/

const power = function (n1, n2) {
  return n1 ** n2;
};

const perimeter = function (n1, n2) {
  return (n1 + n2) * 2;
};

const area = function (n1, n2) {
  return n1 * n2;
};

const calculate = function (method, p1, p2) {
  let result;
  if (method == "area") result = area(p1, p2);
  else if (method == "perimeter") result = perimeter(p1, p2);
  else if (method == "power") result = power(p1, p2);

  return result;
};

console.log(calculate("area", 3, 5));
console.log(calculate("perimeter", 3, 5));
console.log(calculate("power", 3, 5));

//* Example4: residual life
//**********************************************************/

const calculateLife = function (birthYear) {
  const averageLife = 95;
  const age = new Date().getFullYear() - birthYear;
  const residualLife = averageLife - age;

  if (residualLife > 0 && residualLife <= 10) {
    return `You are ${age} years old. You can live more ${residualLife} years. Enjoy the life!`;
  } else if (residualLife > 10 && residualLife <= 20) {
    return `You are ${age} years old. You can live more ${residualLife} years. Get a hobby!`;
  } else {
    return `You are ${age} years old. You can live more ${residualLife} years. Work hard!`;
  }
};

console.log(calculateLife(+prompt("Enter your birthyear: ")));
