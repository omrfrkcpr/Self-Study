//! Write a JavaScript program that calculates and prints the Greatest Common Divisor (GCD) of two given numbers using only conditional statements (if, else if, else) and loops (for, while).

//! - You can only use conditional statements (if, else if, else) and loops (for, while, do while).
//! - The program should prompt the user for two numbers, a and b.
//! - Display the calculated GCD on the console.

//* The greatest common divisor is the greatest integer that divides both number1 and number2 without a remainder.

// take input
let number1 = prompt("Enter a first positive number: ");
let number2 = prompt("Enter a second positive number: ");

// looping until both numbers are equal
while (number1 != number2) {
  if (number1 > number2) {
    number1 -= number2;
  } else {
    number2 -= number1;
  }
}

// display the gcd
console.log(`GCD is ${number1}`);

//& Alternative with For-Loop
/*
const num1 = +prompt("Please enter first number");
const num2 = +prompt("Please enter second number");
let gcd = 1;

for (let i = num1 < num2 ? num1 : num2; i <= num1 && i <= num2; i--) {
  if (num1 % i === 0 && num2 % i === 0) {
    gcd = i;
    break;
  }
}
console.log("The GCD of the entered numbers is: " + gcd);
*/
