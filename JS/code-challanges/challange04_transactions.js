//! Write a program that prints the sum, multiply, smallest and biggest of 3 different integers entered.

const num1 = +prompt("Enter your first number:");
const num2 = +prompt("Enter your second number:");
const num3 = +prompt("Enter your third number:");

//Sum
console.log("Sum of three numbers :", num1 + num2 + num3);

//Multiplication
console.log("Multiplication of three numbers :", num1 * num2 * num3);

//Smallest
let smallest = num1,
  x = "The smallest number :";
if (num2 < num1) smallest = num2;
if (num3 < num1) smallest = num3;
console.log(x + smallest);

//Biggest
let biggest = num1,
  y = "The biggest number :";
if (num2 > num1) biggest = num2;
if (num3 > num1) biggest = num3;
console.log(y + biggest);
