// ? ==========================================================
// ?                    FUNCTIONS
// ? ==========================================================

// !-----------------------------------------------------------
// !3.METHOD  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

//! In funct expression and arrow func methods, the function must be defined first and then called. Otherwise you will get an error.
//! In function we should not enter { }. Otherwise we will get an error.

//* Example1: multiple of 3?
//**********************************************************/

const control = (num) =>
  num % 3 == 0 ? `${num} is multiple of 3` : `${num} is not multiple of 3`;

console.log(control(+prompt("Enter a number")));
