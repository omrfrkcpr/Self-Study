//! Design a program that reports whether the entered numbers are odd or even. (Ternary Condition)

const num = +prompt("Enter a number :");

console.log(
  num % 2 == 0 ? `${num} is an Even Number` : `${num} is an Odd Number`
);
