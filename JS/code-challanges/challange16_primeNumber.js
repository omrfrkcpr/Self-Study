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

//& Alternative

function findPrimesInArray(numbers) {
  return numbers.filter(function (num) {
    if (num < 2) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
}

const numbersUnfiltered = [1, 2, 3, 45, 6, 7, 87, 8, 9, 10, 12, 13, 14, 17];

const primeNumbers = findPrimesInArray(numbersUnfiltered);

console.log("Prime Numbers:", primeNumbers);
