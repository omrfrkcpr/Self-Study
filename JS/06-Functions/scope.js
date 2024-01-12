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
