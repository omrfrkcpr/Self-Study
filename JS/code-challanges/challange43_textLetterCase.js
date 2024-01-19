//! const text = "Clarusway Online Career IT TraininG School ThankS for time";

// ! Convert the above string to array and increase the letters of all words

//! In the string sentence that we returned to array above, change the first letter of the words starting with T to lowercase, leave the other letters uppercase and print them.

const text = "Clarusway Online Career IT TraininG School ThankS for time";

// Task-1:

const allUpper = text.split(" ").map((item) => item.toUpperCase());
console.log(allUpper);

// Task-2

const someLower = allUpper.map((word) => {
  if (word.startsWith("T")) {
    return word[0].toLowerCase() + word.slice(1);
  } else {
    return word;
  }
});
console.log(someLower);
