//! Write the code that hides the numbers 7 to 12 of the entered 16-digit card number with the "*" character and prints it.

//& Alternative-1
// const creditCardNumber = (numbers) => {
//   result = numbers.replaceAll("-", "");
//   return result.replace(result.slice(6, 12), "******");
// };

//& Alternative-2
const creditCardNumber = (numbers) => {
  return numbers.replace(numbers.slice(7, 14), "******").replaceAll("-", "");
};

//& Alternative-3
// const creditCardNumber = (numbers) => {
//   return numbers.split("-").join("").slice(0, 6) + "******" + numbers.slice(-4);
// };

console.log(creditCardNumber("1234-5678-9012-3456")); // 123456******3456
