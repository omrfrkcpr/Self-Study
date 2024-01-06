//! Write a JavaScript program that computes and prints the first n Fibonacci numbers without using any built-in functions (like Math.pow, Math.sqrt, Array methods, etc.) or arrays.

//! - You must not use any built-in JavaScript functions related to Fibonacci sequences or arrays.
//! - The program should prompt the user for the value of n.
//! - Display the first n Fibonacci numbers.
//! Example: For n = 7, the Fibonacci sequence would be: 0, 1, 1, 2, 3, 5, 8

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
