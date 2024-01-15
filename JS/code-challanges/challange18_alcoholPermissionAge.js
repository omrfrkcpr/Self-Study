//! Write the code that prints to the console with an if else structure that people over the age of 18 can use alcohol and those under the age of 18 cannot drink alcohol. (Ternary and If/Else)
//* Ternary
/*
const age = +prompt("Please enter your age");
console.log(
  age > 18
    ? "You are allowed to drink alcohol."
    : "You are not allowed to drink alcohol."
);
*/

//* If-Else
/*
const age = +prompt("Please enter your age");

if (age >= 18) {
  console.log("You are allowed to drink alcohol.");
} else if (age < 18) {
  console.log("You are not allowed to drink alcohol.");
} else console.log("Something went wrong! Age must be entered as a number.");
*/

//* While + Ternary
//& The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary. isNaN() is a more reliable way to test whether a value is the number value NaN or not.
/*
let age = +prompt("Please enter your age");

while (isNaN(age) || age == "") {
  age = prompt("Please enter your age");
}
console.log(
  age >= 18
    ? "You are allowed to drink alcohol."
    : "You are not allowed to drink alcohol."
);
*/

//* Do/While + Ternary
//& age degiskeni globalde tanimlanmali.
/*
let age;

do {
  age = +prompt("Please enter your age");
} while (isNaN(age) || age == "");
{
  age = prompt("Please enter your age");
}
console.log(
  age >= 18
    ? "You are allowed to drink alcohol."
    : "You are not allowed to drink alcohol."
);
*/

//* isNaN() Example
/*
let x = +prompt("Please enter a number");

console.log("x :", x);
console.log("typeof x :", typeof x);

console.log(NaN == NaN);
console.log(isNaN(x)); // icerisindeki deger NaN ise true cikar. 
*/
