//! Ask the user for a number. If the user enters a negative number, give the user the message "You entered a negative number!" If the user enters a positive number, print the numbers from 1 to that number to the console. If it enters 0, print the 0 you entered.

/*
let num = +prompt("Enter a number: ");
let sum = 0;

if (num < 0) {
  console.error("You should enter a positive number");
} else if (num === 0) {
  console.error("You entered 0");
} else {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
*/

//& Alternative with using While-Loop = Ask the user for a positive number if he enters 0 or a negative number

let positive = false;
while (!positive) {
  let num = +prompt("Enter a number: ");
  if (num < 0) {
    console.log("You entered a negative number");
  } else if (num == 0) {
    console.log("You entered 0");
  } else {
    for (i = 1; i <= num; i++) {
      console.log(i);
    }
    positive = true;
  }
}
