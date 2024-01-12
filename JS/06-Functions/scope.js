// ? ==========================================================
// ?                   FUNCTIONS-SCOPE
// ? ==========================================================
console.log("************ SCOPE *************");

//! global scope (everyone can see)

let first = 5;
let second = 12;
let third = 456;

console.log(first, second, third);

const scopeFunction = (n) => {
  //! function-scope
  first = 8;
  let second = 45; // other second that belongs to function
  let fourth = 1234;
  if (n == 3) {
    //! blocked scope
    return third; // 456 (if n == 3)
  }
  return fourth; // 1234 (if n != 3)
};

console.log(second); // 12
console.log(first); // 5

scopeFunction();

console.log(second); // 12
console.log(first); // 8
console.log(scopeFunction(4)); // 1234

// ? *********************************************************

//! global scope

let num1 = 11;

const func1 = () => {
  let num1 = 44; //! function-scope

  num1++;
  return num1;
};

console.log(func1()); // 45

// num1 icin global ve function scope degerleri
console.log(num1); // 11
num1 = func1(); // globalscope = functionscope
console.log(num1); // 45

{
  num1++; // 46
  let x = 5;
  x++; // 6
  let y = x + 15; //21
  console.log(y); //? blocked-scope 21
}

console.log(num1); // 46
// console.log(y); // ReferenceError: y is not defined

// ? ************************ VAR ***************************

num2 = 100;

var num2; //? hoisted (wird hochgezogen)
console.log(num2);

var result = "Hallo";

if (num2 == 100) {
  let result = "Hi";
  console.log(result); //? local(blocked)
} else {
  result = "Salut";
  console.log(result); //? global
}

console.log(result); //? global
