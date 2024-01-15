//! Write a program that counts backwards from the number that the users enter and then prints Happy New Year! at the end. (With using Loops)

const num = +prompt("Enter a start number: ");

for (let i = num; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year!");
