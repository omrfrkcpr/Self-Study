//! Write a program that finds the biggest and smallest number among the entered numbers.

const bigSmallNum = function () {
  console.log(arguments);
  let biggest = arguments[0];
  let smallest = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }
  //   const minMax = [smallest, biggest];
  return `Smallest: ${smallest} | Biggest: ${biggest}`;
};

console.log(bigSmallNum(90, 345, 123, 999999, 545, 112, 5454, 76767, 22));

//& Alternative Method
/*
  const biggestNum = function (a, b, c) {
    let biggest;
  
    if (a > b && a > c) biggest = a;
    else if (b > a && b > c) biggest = b;
    else biggest = c;
  
    return biggest;
  };
  
  alert(biggestNum(3, 5, 9));
  */
