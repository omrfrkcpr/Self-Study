//! Write a program that asks the user for the secret password an unlimited number of times until he enters it correctly (With using While loop).

var secret = prompt("What is the secret password?");

while (secret !== "sesame") {
  secret = prompt("What is the secret password?");
}

document.write("You know the secret password. Welcome.");
