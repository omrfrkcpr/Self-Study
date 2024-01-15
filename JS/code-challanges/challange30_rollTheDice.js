//! Write a function that rolls a dice between 1 and 6 each time it is rolled.

const rollTheDice = () => {
  console.log(Math.floor(Math.random() * 6) + 1); // 1 for not taking 0
  // console.log(Math.ceil(Math.random()*6));
};

rollTheDice();

//& Extra - Write a function that prints the values of the dice thrown as small and large each time they are rolled and says congratulations when there is a tie.

const diceRolling = () => {
  const dice = () => Math.floor(Math.random() * 6) + 1;

  let dice1 = dice();
  let dice2 = dice();

  if (dice1 == dice2) {
    console.log(`Congratulations 🥳. You rolled ${dice1}-${dice2}!`);
  } else {
    dice1 > dice2
      ? console.log(`You rolled ${dice2}-${dice1}!`)
      : console.log(`You rolled ${dice1}-${dice2}!`);
  }
};

diceRolling();
