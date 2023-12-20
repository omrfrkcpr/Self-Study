//Global Area
variableName = "JavaScript";
variableNumber = 56;
console.log(variableName);

{
  //Local Area
  console.log("This is a local area");
}

/* ---------------------------------- */
/*                 VAR                */
/* ---------------------------------- */

var x = 5;
x = 15;
console.log(x);

{
  console.log("I'm in the local area");
  x = 45;
  console.log(x);
}

console.log(x * 5); // the result is 225, not 75 !!!

/* ---------------------------------- */
/*    CONST (CONSTANT / KONSTANTE)    */
/* ---------------------------------- */

const pi = 3.14;
const number1 = 15;

console.log("Global Area: ", pi);
//uncaught referenceError: cannot access 'pi' before initialization

{
  const pi = 3;
  console.log("Local Area: ", pi);
}

/* ----------------------------------------------- */
/* LET (This allows you to change the const value) */
/* ----------------------------------------------- */

//const number2 = 15;
//number2 = 25; Uncaught TypeError: Assignment to constant variable.
let number2 = 15;
sum = 25 + 15;
console.log(sum); // result 40

{
  sum = 40 + 25;
  console.log(sum); // result 65
}

console.log(sum); // result 65
