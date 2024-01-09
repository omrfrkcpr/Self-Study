//! Guessing Game

//! The program will keep a random number between 1-20 and ask the user to know this number 5 times. For each mistake, it will decrease its right by one and direct the user by saying INCREASE/DECREASE. As a result, if the user's right is 0, it will say "Sorry, you didn't know". If the user's right is 0, it will say "Congratulations, you know".

let again;
do {
  const random = Math.ceil(Math.random() * 20);
  console.log(random);
  let remain = 5;

  while (remain > 0) {
    const guess = +prompt("Guess the number");
    remain--;
    if (guess == random) {
      console.log("Cogratulations! 🥳", guess);
      break;
    } else if (guess < random) {
      console.log(`Increase 📈, You have ${remain} left`);
    } else {
      console.log(`Decrease 📉, You have ${remain} left`);
    }

    if (remain == 0) {
      console.log(`Sorry. You couldn't guess. The number is ${random}`);
    }
  }
  again = prompt("Please enter e/E to play again!");
} while (again.toUpperCase() == "E");

console.log("End Game!");
