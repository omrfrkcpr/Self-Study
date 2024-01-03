//! Write a program that returns the corresponding sequence number according to the entered month name, using the switch-case structure.

const month = prompt("Enter a month name");
let result;

switch (month) {
  case "january":
    result = 1;
    break;
  case "february":
    result = 2;
    break;
  case "march":
    result = 3;
    break;
  case "april":
    result = 4;
    break;
  case "may":
    result = 5;
    break;
  case "june":
    result = 6;
    break;
  case "july":
    result = 7;
    break;
  case "august":
    result = 8;
    break;
  case "september":
    result = 9;
    break;
  case "oktober":
    result = 10;
    break;
  case "november":
    result = 11;
    break;
  case "december":
    result = 12;
    break;
  default:
    alert("Please enter a valid month name");
}
console.log(result);
