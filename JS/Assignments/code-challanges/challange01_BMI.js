// Body Mass Index (BMI) Calculator

let a = prompt("Enter your weight in kilograms");
console.log("Your weight is :", a, "kg");
let b = prompt("Enter your height in meters");
console.log("Your height is :", b, "m");
let c = "According to your Body Mass Index (BMI), you have a";
let bmi = a / (b * b);

if (bmi < 18.5) {
  console.log(c, "Low Weight");
} else if (bmi > 18.5 && bmi < 24.99) {
  console.log(c, "Normal Weight");
} else if (bmi > 25.0 && bmi < 29.99) {
  console.log(c, "High Weight");
} else if (bmi >= 30) {
  console.log(c, "obesity");
} else {
  console.log("Please enter a valid weight and height");
}
