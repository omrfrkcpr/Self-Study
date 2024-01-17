//! Write the function that prints all indexes containing the desired character in the given text

let lrm =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const findIndex = (text, char) => {
  let index = 0;

  if (text.indexOf(char, index) == -1) {
    console.log(`There isn't any ${letter} in ${text}`);
    return;
  }

  while (text.indexOf(char, index) !== -1) {
    console.log(text.indexOf(char, index));
    index = text.indexOf(char, index) + 1;
  }
};

findIndex(lrm, "e"); // 3 29 38 56 58
