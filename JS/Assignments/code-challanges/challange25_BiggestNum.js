//! Write a program that finds the biggest number among the entered numbers.

const biggestNum = function () {
  let biggest = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }
  }
  return biggest;
};

console.log(biggestNum(90, 345, 123, 23, 545, 112, 5454, 76767, 22));

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
