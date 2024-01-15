//! Write a function that takes the number of animals on the farm as parameters and returns the sum of the number of feet.

//! Chicken, Cow, Duck, Goat

const numberOfFeet = (chicken, cow, duck, goat) => {
  let sum = (chicken + duck) * 2 + (cow + goat) * 4;
  return sum;
};

console.log(numberOfFeet(5, 3, 2, 10)); // 66
