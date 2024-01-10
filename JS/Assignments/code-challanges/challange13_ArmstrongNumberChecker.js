//! Write a JavaScript program to check if a given number is an Armstrong number using only conditional statements (if, else if, else) and loops (for, while).

//! - An Armstrong number (also known as narcissistic number) of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
//! - You can only use conditional statements (if, else if, else) and loops (for, while, do while).
//! - The program should prompt the user for a number.
//! - Display whether the entered number is an Armstrong number or not.

"use strict";

const num = prompt("Please enter a number");
const n = num.lenght;
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += num[i] ** n;
}

if (sum === +num) {
  console.log(`${num} is an armstrong number`);
} else {
  console.log(`${num} is not an armstrong number`);
}
