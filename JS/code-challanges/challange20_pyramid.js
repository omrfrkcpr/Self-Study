// Write the codes that give output in accordance with the * notations given below.

//! #
//! ##
//! ###
//! ####
//! #####

let size = 5;
for (i = 1; i < size + 1; i++) {
  let row = " ";
  for (j = 0; j < i; j++) {
    row += "#";
  }
  console.log(row);
}

//!     #
//!    ###
//!   #####
//!  #######
//! #########

let size2 = 5;
let output = "";
for (let i = 0; i < size2; i++) {
  let row = "";
  for (let s = 0; s < size2 - i - 1; s++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i + 1; j++) {
    output += "#";
  }
  console.log(row + output);
  output = "";
}
