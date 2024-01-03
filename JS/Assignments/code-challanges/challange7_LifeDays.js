//! Write a program that gives the total number of days lived by a person according to the entered date of birth, month and year.

let currentDay = +prompt("Enter today's day of month");
if (currentDay < 0 || currentDay > 31) alert("Please enter a valid day");
let currentMonth = +prompt("Enter current month of year");
if (currentMonth < 1 || currentMonth > 12) alert("Please enter a valid month");
let currentYear = +prompt("Enter current year of time");
if (currentYear < 1900 || currentYear > 2024) {
  alert("Please enter a valid year");
}

const day = +prompt("Enter the day of your birth: ");
if (day < 0 || day > 31) alert("Please enter a valid day");
const month = +prompt("Enter the month of your birth: ");
if (month < 1 || month > 12) alert("Please enter a valid month");
const year = +prompt("Enter the year of your birth: ");
if (year < 1900 || year > 2024) alert("Please enter a valid year");

let sumDay;
if (currentDay > day || currentDay == day) sumDay = currentDay - day;
else sumDay = currentDay - day + 30.4;

let sumMonth;
if (currentMonth > month || currentMonth == month)
  sumMonth = currentMonth - month;
else sumMonth = currentMonth - month + 12;

let totalDayLife =
  Math.round(sumDay) +
  Math.round(sumMonth * 30.4) +
  Math.round([(currentYear - year) * 365.25]);
console.log(totalDayLife);
