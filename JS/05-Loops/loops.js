// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//?  Print 10x Hi
/*
for (let i = 1; i <= 10; i++) {
  console.log(i, "Hello");
}
*/

//? Sum of the numbers from 1 to N
/*
const N = +prompt("Enter a number");
let sum = 0;
for (let x = 1; x <= N; x++) {
  sum += x;
}
console.log(sum);
*/

//? Write a program that detects whether the number entered from outside is prime or not and prints the result. (FLAG)
/*
const num = +prompt("Enter a number to check:");
let prime = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    prime = false;
  }
}

console.log(
  prime ? `${num} is a prime number` : `${num} is not a prime number`
);
*/

//? Write a program that generates 7 random integer numbers between 0-100
