//! Write a program that detects whether the number entered from outside is prime or not and prints the result. (FRAG - PRIMZAHL)

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
