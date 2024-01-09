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

//? Write a program that generates 7 random integer numbers between 0-100. (For-Loop)
//*Math.ceil()
//This static method always rounds up and returns the smallest integer greater than or equal to a given number.
//*Math.random()
//This static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
//*Math.trunc()
//This static method returns the integer part of a number by removing any fractional digits.
//*Math.floor()
//This static method always rounds down and returns the largest integer less than or equal to a given number.

for (let i = 0; i < 7; i++) {
  console.log(Math.ceil(Math.random() * 100));
}
