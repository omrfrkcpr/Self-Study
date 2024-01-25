//! Write a function rotateArrayObjects that takes an array of objects arr and an integer steps as input. The function should rotate the elements of the array to the right by the given number of steps. The order of objects should be maintained during rotation.

//! Constraints:
//! - The array can contain both objects and other data types.
//! - The number of steps will be a non-negative integer.

// function rotateArrayObjects(arr, steps) {
//   //* Check if the array is valid
//   if (!Array.isArray(arr)) {
//     console.error("Invalid input. Please provide an array.");
//     return;
//   }

//   //* Check the validity of steps input
//   if (steps < 0 || steps >= arr.length || !Number.isInteger(steps)) {
//     console.error("Invalid steps input. Please enter a valid steps");
//     return;
//   }

//   //* Define arr[steps] as a first element of the new Array
//   const newArr = [arr[steps]];

//   //* Push the other elements of arr in the entered order
//   newArr.push(...arr.slice(steps + 1)); //? merge the elements after our first element of new Array ( arr[steps] ) into a new array.
//   newArr.push(...arr.slice(0, steps)); //? Merge the elements before the first element of the new Array ( arr[steps] ) into a new array that has been merged before.

//   //* return newArr
//   return newArr;
// }
// // Example usage:
// const inputArray = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Bob" },
//   { id: 4, name: "Alice" },
// ];
// const rotatedArray = rotateArrayObjects(inputArray, 2);
// console.log(rotatedArray);
/*
    Output: [
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
    ]
*/

//& Alternative

function rotateArrayObjects(arr, steps) {
  for (let i = 0; i < steps; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

const inputArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

const rotatedArray = rotateArrayObjects(inputArray, 2);
console.log(rotatedArray);
