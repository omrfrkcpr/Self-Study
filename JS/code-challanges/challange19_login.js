//! Write the code that takes the username and password from the user and checks them. If it matches, it logs in. If it does not match, it warns you that you could not log in.

const user = "Mark";
const psswd = "1234";
let remain = 3;

while (remain > 0) {
  let userName = prompt("Please enter your username");
  let userPassword = +prompt("Please enter your password");
  remain--;

  if (userName == user && userPassword == psswd) {
    console.log(`You are succesfully logged in 🥳`);
    break;
  } else if (userName == user && userPassword != psswd) {
    console.log(`Your password is wrong. ${remain} left`);
  } else if (userName != user && userPassword == psswd) {
    console.log(`Your username is wrong. ${remain} left`);
  } else console.log(`Your username and password are wrong. ${remain} left`);

  if (remain == 0) {
    console.log("Sorry. You cannot log in 😞");
  }
}
