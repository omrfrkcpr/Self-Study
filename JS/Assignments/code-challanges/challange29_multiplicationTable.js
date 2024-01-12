//! Write a function that displays the multiplication table of the number

const printMultiplicationTable = (num, n) => {
  for (let i = 1; i <= n; i++) {
    result = console.log(`${num} * ${i} = ${num * i}`);
  }
  return result;
};

printMultiplicationTable(5, 10);
