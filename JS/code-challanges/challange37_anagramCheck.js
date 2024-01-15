//! Your function should be case-insensitive and ignore spaces and punctuation.
//! It should return true if the input strings have the same set of characters (ignoring order), and false otherwise.

//! Some anagram examples:
/*
console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false
*/

//& replace(/\s/g, "") === The \s meta character in JavaScript regular expressions matches any whitespace character: spaces, tabs, newlines and Unicode spaces. And the g flag tells JavaScript to replace it multiple times. If you miss it, it will only replace the first occurrence of the white space.

const areAnagrams = (text1, text2) => {
  function sorted(str) {
    return str.replace(/\s/g, "").toLowerCase().split("").sort().join("");
  }
  text1 = sorted(text1);
  text2 = sorted(text2);

  if (text1 === text2) return true;
  else return false;
};

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("debit card", "bad credit")); // true
console.log(areAnagrams("Dormitory", "dirty room")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true
console.log(areAnagrams("Astronomer", "Moon starer")); // true

console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("apple", "banana")); // false
console.log(areAnagrams("hello", "holla")); // false
console.log(areAnagrams("race", "racing")); // false
