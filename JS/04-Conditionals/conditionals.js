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
