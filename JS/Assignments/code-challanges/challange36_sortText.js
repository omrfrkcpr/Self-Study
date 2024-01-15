//! Write the function that sorts the entered text alphabetically.

let str = "Hello World";
function iterateString(text) {
  return text.toLowerCase().split("").sort().join("");
}
console.log(iterateString(str)); // dehllloorw
