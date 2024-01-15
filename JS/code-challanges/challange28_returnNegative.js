//! Write a function that returns the positive number negative. Otherwise it returns the same number

const returnNegative = (num) => {
  if (num <= 0) return num;
  return -num;
};

console.log(returnNegative(100)); // -100
console.log(returnNegative(-100)); // -100
console.log(returnNegative(0)); // 0
