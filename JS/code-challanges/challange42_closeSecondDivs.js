//! Write a function that accepts a String as an argument. The String is supposed to be HTML, but all the div alements are missing their closing tags (they have < and >). The function's job is to find and close all the divs in the provided HTML String. At the end, the function should return the entire corrected string.

//? "<div><p>Here is a <div> tag </p>"
//? "<div><div><div>" => "<div></div><div>"
//? "<div><div><p>Hello</p><div><div>" => "<div></div><p>Hello</p><div></div>"

//? every second div needs to be closed <div> => </div>

const closeSecondDivs = (string) => {
  let divCounter = 0;
  let unknownFour = "";
  let fixedHTML = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "<") {
      for (let j = 1; j < 5; j++) {
        unknownFour += string[i + j];
      }
    }

    if (unknownFour === "div>") {
      divCounter++;
      if (divCounter % 2 === 0) {
        fixedHTML += string[i] + "/";
        unknownFour = "";
        continue;
      }
    }

    fixedHTML += string[i];
    unknownFour = "";
  }
  return fixedHTML;
};

console.log(closeSecondDivs("<div><div><div>"));
console.log(closeSecondDivs("<div><div><p>Hello</p><div><div>"));
