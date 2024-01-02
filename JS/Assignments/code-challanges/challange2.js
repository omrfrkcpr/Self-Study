// Shipping Fee Calculator

let a = prompt("Enter a distance in kilometers");
console.log("Distance: ", a, "km");
let b = "Shipping Fee: ";

if (a > 0 && a < 500) {
  let c = a * 50;
  console.log(b, c);
} else if (a > 500 && a < 1000) {
  let c = a * 100;
  console.log(b, c);
} else if (a >= 1000) {
  let c = a * 500;
  console.log(b, c);
} else {
  console.error("Please enter a valid distance");
}
