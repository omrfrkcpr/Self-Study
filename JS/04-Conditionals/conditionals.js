// * =======================================================
// *                   CONDITIONALS
// * =======================================================

// //************************ IF-ELSE ***********************

//! Calculator
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
const num1 = +prompt("Enter your first number: ");
const operator = prompt("Select an operator between +,-,*,/");
const num2 = Number(prompt("Enter your second number: "));
let result;

// Tek satir (1 durum) bir if-else icin { } koymak zorunda degiliz.
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else {
  alert("Wrong operator!");
}
console.log(result);
