//! Write a program that prints the greates and smallest values among n numbers.

let n = 4;
let num = +prompt("Enter a number:");

let min = num;
let max = num;

for (i = 0; i < n; i++) {
  let num1 = +prompt("Enter another number: ");
  if (num1 < min) {
    min = num1;
  } else if (num1 > max) {
    max = num1;
  } else {
    num1 = num;
  }
  console.log("Min: ", min);
  console.log("Max: ", max);
}
