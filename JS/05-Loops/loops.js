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

//? Write a program that detects whether the number entered from outside is prime or not and prints the result. (FRAG)
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
/*
for (let i = 0; i < 7; i++) {
  console.log(Math.ceil(Math.random() * 100));
}
*/

//****************** */ WHİLE*************

//? Write a program that ask for a number between 1-100. Otherwise, give the error message and ask for the number again. (While)
/*
let num = +prompt("Please enter a number:");
while (num < 1 || num > 100) {
  console.error("Opsss!. It should be between 1-100");
  num = +prompt("Please enter another number:");
}
console.log("Congratulations!", num);
*/

//? Write a program that ask for a number between 1-100. Otherwise, give the error message and ask for the number again. (Do-While)
/*
let num;

do {
  num = +prompt("Please enter a number between 1-100:");
  num < 1 || num > 100 && alert("Opsss!. It should be between 1-100");
} while (num < 1 || num > 100);

console.log("Congratulations!", num);
*/

//? Write a program that asks the user for Midterm and Final scores and calculates the passing score by taking 40% of the midterm + 60% of the final. After each calculation, the program will ask again whether the calculation should be made for someone else, and if the answer is 'e' or 'E', it will ask for a note again and repeat the process.
/*
let go;

do {
  let midTerm = +prompt("Please enter your midterm score:");
  let final = +prompt("Please enter your final score:");

  let result = midTerm * 0.4 + final * 0.6;
  console.log(
    result >= 60 ? "Congratulations, you passed!" : "Sorry!, you failed!"
  );

  go = prompt(
    "Please enter e/E to continue to calculate or enter any other keyboard key to finish"
  );
} while (go.toUpperCase() == "E");

console.log("Finished!");
*/

//? Write a program using a loop that inputs numbers until the character q is entered from the keyboard.
/*
let num1;
do {
  num1 = prompt("Please enter a number:");
} while (num1 != "q");

console.log("Finished!");
*/

//?
