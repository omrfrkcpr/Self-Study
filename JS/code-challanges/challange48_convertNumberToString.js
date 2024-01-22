//& write a function called convertNumberToString(num) that converts the given number (between 0-9999) into text ==> 349 : threehundrednine

const convertNumberToString = (num) => {
  // check if num is negative or positive number
  if (num < 0) return "Please enter a valid number";

  // define => units / teens / tens objects
  const units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  const teens = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen",
  };
  const tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  // hundred and thousand strings for 3 and 4 digit numbers
  const hundreds = "hundred";
  const thousands = "thousand";

  // convert num to array
  const numString = num.toString();
  const numArray = [];
  for (let i = 0; i < numString.length; i++) {
    numArray.push(Number(numString[i]));
  }

  // empty result array for pushing strings
  const result = [];

  // switch-case statement => according to array.length
  switch (numArray.length) {
    case 1:
      result.push(units[numArray[0]]);
      break;
    case 2:
      if (numArray[0] === 1) {
        result.push(teens[numArray[1]]);
      } else {
        result.push(tens[numArray[0]]);
        if (numArray[1] !== 0) {
          result.push(units[numArray[1]]);
        }
      }
      break;
    case 3:
      result.push(units[numArray[0]] + hundreds);
      if (numArray[1] !== 0 || numArray[2] !== 0) {
        result.push(
          convertNumberToString(Number(`${numArray[1]}${numArray[2]}`)) // get info from case 2
        );
      }
      break;
    case 4:
      result.push(units[numArray[0]] + thousands);
      if (numArray[1] !== 0 || numArray[2] !== 0 || numArray[3] !== 0) {
        result.push(
          convertNumberToString(
            Number(`${numArray[1]}${numArray[2]}${numArray[3]}`) // get info from case 3
          )
        );
      }
      break;
    default:
      result.push("Please enter a valid number"); // for the inputs ==> num > 9999
  }

  return result.join(""); // array to string
};

console.log(convertNumberToString(349)); // "threehundredfortynine"
console.log(convertNumberToString(5768)); // "fivethousandsevenhundredsixtyeight"
console.log(convertNumberToString(106)); // "onehundredsix"
console.log(convertNumberToString(839)); // "eighthundredthirtynine"
console.log(convertNumberToString(36)); // "thirtysix"
console.log(convertNumberToString(0)); // "zero"
console.log(convertNumberToString(10)); // "ten"
console.log(convertNumberToString(29)); // "twentynine"
console.log(convertNumberToString(9999)); // "ninethousandninehundredninetynine"
console.log(convertNumberToString(10000)); // "Please enter a valid number"
console.log(convertNumberToString(-100)); // "Please enter a valid number"
