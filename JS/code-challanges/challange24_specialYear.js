//! A date is a leap year if it is divisible by 4 but not by multiples of 100, or if the year is divisible by 400. In years other than these two conditions, February lasts 28 dmonths, while in leap years February lasts 29 days. Write a program to find out whether the year is a leap year or not, based on this information.
/*
let year = +prompt("Enter a year");

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log("February lasts 29 Days");
} else {
  console.log("February lasts 28 Days");
}

*/

//& Alternative with function

const specialYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " bir artık yıldır.");
  } else {
    console.log(year + " bir artık yıl değildir.");
  }
};
specialYear(2020);
specialYear(2021);
specialYear(2022);
specialYear(2023);
specialYear(2024);

//& extra with using switch-case
/*
let year = +prompt("Enter a year:");
let month = +prompt("Enter a valid month:");
let day;
let positive = false;

while (!positive) {
  if (month < 1 || month > 12) {
    month = +prompt(
      "You entered the wrong month. Please enter a value between 1-12"
    );
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        day = 30;
        break;
      case 2:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          day = 29;
        } else {
          day = 28;
        }
        break;
      default:
        break;
    }

    console.log(`In ${year}, ${month}.month lasts ${day} days`);
    positive = true;
  }
}
*/
