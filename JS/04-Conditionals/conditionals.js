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

// //************************ SWITCH-CASE ***********************

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
