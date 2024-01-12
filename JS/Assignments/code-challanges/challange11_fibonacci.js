//! Write a JavaScript program that computes and prints the first n Fibonacci numbers without using any built-in functions (like Math.pow, Math.sqrt, Array methods, etc.) or arrays.

//! - You must not use any built-in JavaScript functions related to Fibonacci sequences or arrays.
//! - The program should prompt the user for the value of n.
//! - Display the first n Fibonacci numbers.
//! Example: For n = 7, the Fibonacci sequence would be: 0, 1, 1, 2, 3, 5, 8

"use strict";

/*
const n = parseInt(prompt("Enter the value of n: "));
let n1 = 0,
  n2 = 1,
  nextValue;

console.log("Fibonacci Series: ");

for (let i = 1; i <= n; i++) {
  console.log(n1);
  nextValue = n1 + n2;
  n1 = n2;
  n2 = nextValue;
}
*/

//& Alternative with If-Else

// let num = +prompt("Enter the repeat time:");

// if (num === 1) {
//   console.log("First", num, "of Fibonacci Series = ", "0");
// } else if (num === 2) {
//   console.log("First", num, "of Fibonacci Series = ", "0,1");
// } else if (isNaN(num) || num == "") {
//   console.error("Please enter repeatable time");
// } else {
//   let a = 0;
//   let b = 1;
//   let output = "0,1";
//   for (let i = 3; i <= num; i++) {
//     let c = a + b;
//     output += "," + c;
//     a = b;
//     b = c;
//   }
//   console.log("First", num, "of Fibonacci Series = ", output);
// }

//& Alternative with using Function

const fibonacci = (n) => {
  let fiboL = 1;
  let fiboR = 1;
  let newFibo = 0;
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    newFibo = fiboL + fiboR;
    sum += newFibo;
    fiboL = fiboR;
    fiboR = newFibo;
  }
  return `${n}.term of Fibonacci: ${newFibo} / The summary of ${n} terms: ${
    sum + 2
  }`;
};

console.log(fibonacci(8)); // 21 cunku 1 den baslattik

//& Alternative with using recursive
//? in the fibonacci sequence n. term finding function
//? FIBONACCI series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

const fibo = (n) => {
  if (n == 3 || n == 2) return 1;
  else if (n == 1) return 0;
  else if (n < 0) return alert("Please enter a positive number of terms");
  else return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(8)); // 13
