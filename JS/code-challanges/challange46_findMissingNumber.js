//! Write a function findMissingNumber that takes an array arr as an argument. The array contains n distinct numbers taken from the range 1 to n+1. It means that one number is missing from the array. Your task is to find and return that missing number.

//! Constraints:

//! - The array will always have at least one element.
//! - The numbers in the array are distinct and taken from the range 1 to n+1, where n is the length of the array.
//! Note: You can assume that there will always be exactly one missing number.

function findMissingNumber(arr) {
  //* The biggestNum() function which finds the biggest number of the entered array(arr) to create the default array, which we compare with the entered array(arr) to find the missing number
  const biggestNum = (arr) => {
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
    }
    return biggest;
  };
  //   console.log(biggestNum(arr));

  //* The defaultArray(arr) function, which outputs the compareArray containing numbers from 1 to the largest number that we will create according to the largest number we will find in the entered array (arr).
  const defaultArray = (arr) => {
    const compareArray = [];
    for (let i = 1; i <= biggestNum(arr); i++) {
      compareArray.push(i);
    }
    return compareArray;
  };

  //* The missingNumber(array1, array2) function, which outputs the elements that are in the 1st array but not in the 2nd array among the two given arrays.
  const missingNumber = (array1, array2) => {
    const nums = array1.filter((num) => !array2.includes(num));
    return nums;
  };

  return missingNumber(defaultArray(arr), arr);
}

arr = [1, 2, 4, 6, 3, 7, 8];
console.log(findMissingNumber(arr)); // Output: 5
