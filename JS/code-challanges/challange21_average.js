// Write a program that prints the average of the entered numbers.

//& For
/*
let sum = 0;
for (i = 0; i < 5; i++) {
  let num = +prompt("Enter a number");
  sum += num;
  console.log("Average: ", sum / (i + 1));
}
*/

//& While
let sum = 0;
let repeat = 0;
while (repeat < 5) {
  let num = +prompt(`Enter ${repeat + 1}. number:`);
  sum += num;
  repeat++;
  console.log(repeat);
}
console.log("Average: ", sum / repeat);
