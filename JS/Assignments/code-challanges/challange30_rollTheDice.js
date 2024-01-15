//! Write a function that rolls a dice between 1 and 6 each time it is rolled.

const rollTheDice = () => {
  console.log(Math.floor(Math.random() * 6) + 1);
  // console.log(Math.ceil(Math.random()*6));
};

rollTheDice();
