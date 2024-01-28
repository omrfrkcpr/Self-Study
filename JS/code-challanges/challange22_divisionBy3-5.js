//! Write a program that prints numbers between 1000 and 2000 that are divisible by both 3 and 5.

//& for
/*
let order = 1;
for (num = 1000; num < 2000; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${order}. ${num}`);
    order++;
  }
}
*/

//& while

let num = 1000;
let order = 1;

while (num <= 2000) {
  if (num % 15 === 0) {
    console.log(`${order}. ${num}`);
    order++;
  }
  num++;
}
