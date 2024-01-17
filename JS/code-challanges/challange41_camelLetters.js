//! Write a function that accepts a string as an argument. The function should capitalize ONLY every other letter in the string. The function should then return the converted String.
//! letter === character
//! starting caps at letter 0

//! Examples:
//! "hello" => "HeLlO"
//! "yo eli" => "Yo eLi"
//! "hello???" => "HeLlO???"
//! "HELLO" => "HeLlO"

const camelLetters = (string) => {
  // loop through string

  let camelString = "";
  for (let i = 0; i < string.length; i++) {
    // change the even indices to be caps
    if (i % 2 === 0) camelString += string[i].toUpperCase();
    else camelString += string[i].toLowerCase();
  }
  return camelString;
};

console.log(camelLetters("hello")); // HeLlO
console.log(camelLetters("yo eli")); // Yo eLi
console.log(camelLetters("hello???")); // HeLlO???
console.log(camelLetters("HELLO")); // HeLlO
