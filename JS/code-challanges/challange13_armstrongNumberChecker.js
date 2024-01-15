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

//& Alternative with While-Loop
/*
let num = parseInt(prompt("Enter a number:"));
let originalNumber = num;
let digitCount = 0;
let sum = 0;

//Finding digit
while (originalNumber !== 0) {
  originalNumber = Math.floor(originalNumber / 10);
  digitCount++;
}

originalNumber = num;

while (originalNumber > 0) {
  let digit = originalNumber % 10;
  sum += digit ** digitCount;
  originalNumber = Math.floor(originalNumber / 10);
}

sum === num
  ? console.log(num + " is an Armstrong number.")
  : console.log(num + " is not an Armstrong number.");
*/
