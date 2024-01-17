//! Write a function that takes the text and the number of shift as parameters, scrolls the text according to the ASCI code by the number of shift, and then prints the encrypted text. (Caesar Chipher)

//! Write it also for decryption

const caesar = (str, shift) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    newStr = str.charCodeAt(i) + shift;
    result += String.fromCharCode(newStr);
  }
  console.log(result);
};

caesar("abc", 3); // def

//& Decryption

const caesarDecrypt = (str, shift) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    newStr = str.charCodeAt(i) - shift;
    result += String.fromCharCode(newStr);
  }
  console.log(result);
};

caesarDecrypt("def", 3); // abc
