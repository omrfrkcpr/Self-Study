//! Write a function that produces a number between the given min max parameters each time it is called.

const randomBetweenMinMax = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min * 1)) + min);
};

randomBetweenMinMax(10, 20);
