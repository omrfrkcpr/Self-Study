//! Write a function that reverses the entered text and checks whether it is a palindrome or not.

function reverseText(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }

  if (text.toLowerCase() === reverse.toLowerCase()) {
    console.log(`${text} = a palindrome`);
  } else {
    console.log(`${text} = not a palindrome`);
  }
}

reverseText("Enter a text");
console.log("Enter a text".split(" "));
