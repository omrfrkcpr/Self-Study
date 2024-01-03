// * =======================================================
// *                   CONDITIONALS
// * =======================================================

// //************************ IF-ELSE ***********************

//! Calculator
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== Calculator");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
//?Tek satir (1 durum) bir if-else icin { } koymak zorunda degiliz.

/*
const num1 = +prompt("Enter your first number: ");
const operator = prompt("Select an operator between +,-,*,/");
const num2 = Number(prompt("Enter your second number: "));
let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  if (num2 != 0) result = num1 / num2;
  else alert("Please enter another number. You can not enter 0");
} else {
  alert("Wrong operator!");
}

//! 1.Print
if (result != "undefined") {
  console.log(result);
}
//! 2.Print -- Best
if (result) {
  // Deger ise zaten true olarak alir
  console.log(result);
}
//! 3.Print
//Ikisi de true ise yazdirir
result && console.log(result);
*/

//* EXAMPLE 2 - EXAM RESULT
/*
const score = +prompt("Enter your score: ");

if (score < 0 || score > 100) alert("Please enter a valid score");
else if (score >= 0 && score <= 25) console.log("FF");
else if (score >= 26 && score <= 45) console.log("DD");
else if (score >= 46 && score <= 65) console.log("CC");
else if (score >= 66 && score <= 75) console.log("BB");
else if (score >= 76 && score <= 90) console.log("BA");
else console.log("AA");
*/

// //************************ TERNARY ***********************
//? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise, Ternary kullanmak daha mantiklidir

console.log("-------------------------------------");
console.log("==TERNARY");
console.log("-------------------------------------");

//* EXAMPLE 1 - Becoming Soldier
/*
const age = +prompt("Enter your age: ");
const gender = prompt("Enter your gender: ");
const health = prompt("Are you healthy?");

//! 1.Alternative
if (age >= 20 && gender == "male" && health == "yes") {
  console.log("You are allowed to be a soldier!");
} else {
  console.log("You are now allowed to be a soldier!");
}

//! 2.Alternative
age >= 20 && gender == "male" && health == "yes"
  ? console.log("You are allowed to be a soldier!")
  : console.log("You are now allowed to be a soldier!");
*/

//* EXAMPLE 2 - Grade
/*
const grade1 = prompt("Please enter your grade: ");

grade1 >= 50 ? console.log("SUCCESS!") : console.log("FAIL!");
*/

//* EXAMPLE 3 - Speed
/*
const speed = 110;

speed > 120
  ? console.log("Speedy")
  : speed >= 90
  ? console.log("Normal Speed")
  : console.log("Low Speed");

//! Alternative

if (speed > 120) {
  console.log("Speedy");
} else if (speed >= 90) {
  console.log("Normal");
} else {
  console.log("Low Speed");
}
*/

//* EXAMPLE 4 - SALARY
/*
const minimumWage = 1650;
const salary = +prompt("Enter your monthly salary");

const raisedSalary = salary <= minimumWage ? salary * 1.25 : salary * 1.1;

console.log(raisedSalary);
*/

//* EXAMPLE 5 - CREDIT
/*
const salary = +prompt("Enter your salary: ");
const loan = +prompt("Enter your loan: ");

const credit =
  5000 <= salary * 10 - loan
    ? console.log("you can apply for a credit🎉")
    : console.log("You cannot apply for a credit😞");
*/

//* EXAMPLE 6 - THE BIGGEST NUMBER
/*
const num1 = +prompt("Enter your first number: ");
const num2 = +prompt("Enter your second number: ");
const num3 = +prompt("Enter your third number: ");
let x = " is the biggest number";

//! 1.Alternative
if (num1 > num2 && num1 > num3) {
  console.log(num1 + x);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + x);
} else if (num3 > num1 && num3 > num2) {
  console.log(num3 + x);
} else {
  console.log("All numbers are equal");
}

//! 2.Alternative
console.log(
  num1 > num2 && num1 > num3
    ? "num1 is biggest"
    : num2 > num3
    ? "num2 is biggest"
    : "num3 is biggest"
);

//! 3.Alternative
let biggest = num1;

if (num2 > biggest) {
  biggest = num2;
}
if (num3 > biggest) {
  biggest = num3;
}

console.log(biggest + x);
*/

// //************************ SWITCH-CASE ***********************
console.log("-------------------------------------");
console.log("==SWITCH-CASE");
console.log("-------------------------------------");

//* EXAMPLE 1 - Week Day
/*
const dayOfWeek = 4;
let day;

switch (dayOfWeek) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    alert("Enter a number between 1 and 7");
    break;
}
console.log(day);
*/

//* EXAMPLE 2 - Calculator
/*
let num1 = +prompt("Enter your first number");
let operator = prompt("Enter your operator between +,-,*,/");
let num2 = +prompt("Enter your second number");

let result = 0;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    alert("Wrong operator!");
    break;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
*/

//=====================================================//
//?=================GENERAL KNOWLADGE==================//
//=====================================================//

//!Binary Number

console.log(Number(0b101 + 15)); // b = binary 2 lik taban

// 0b101 = 2^0*1 + 2^1*0 + 2^2*1 = 5

//! Oktal Number

console.log(Number(0o75 + 3)); // o = oktal 8 lik taban

// 0o75 = 8^0*5 + 8^1*7 = 61

//! Hexa Number

console.log(Number(0x201 + 9)); // x = hexa 16 lik taban

// 0x201 = 16^0*1 + 16^1*0 + 16^2*2 = 513
