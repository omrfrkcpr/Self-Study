//! #
//! ##
//! ###
//! ####
//! #####
/*
let size = 5;
for (i = 1; i < size + 1; i++) {
  let row = " ";
  for (j = 0; j < i; j++) {
    row += "#";
  }
  console.log(row);
}
*/

//!     #
//!    ###
//!   #####
//!  #######
//! #########
/*
let size = 5;
let output = "";
for (let i = 0; i < size; i++) {
  let row = "";
  for (let s = 0; s < size - i - 1; s++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i + 1; j++) {
    output += "#";
  }
  console.log(row + output);
  output = "";
}
*/
