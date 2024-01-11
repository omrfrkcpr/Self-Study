//! Write a program that calculate age and residual life and prints a message according to residual life.

const calculateLife = function (birthYear) {
  const averageLife = 95;
  const age = new Date().getFullYear() - birthYear;
  const residualLife = averageLife - age;

  if (residualLife > 0 && residualLife <= 10) {
    return `You are ${age} years old. You can live more ${residualLife} years. Enjoy the life!`;
  } else if (residualLife > 10 && residualLife <= 20) {
    return `You are ${age} years old. You can live more ${residualLife} years. Get a hobby!`;
  } else {
    return `You are ${age} years old. You can live more ${residualLife} years. Work hard!`;
  }
};

console.log(calculateLife(+prompt("Enter your birthyear: ")));
