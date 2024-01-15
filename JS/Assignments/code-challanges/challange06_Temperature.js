//! Write a program that converts the entered temperature value to fahrenheit or degrees fahrenheit. It should be asked at the beginning of the program which unit the conversion will be from to which unit.

/*
let unit = prompt(
  "Enter a unit of temperature (celcius/fahrenheit):"
).toLowerCase();
let t = +prompt("Enter the temperature value :");
if (t < 0 || t > 100) {
  alert("Please enter a valid unit of temperature");
}

let result = 0;

if (unit == "celcius") {
  result = t * 1.8 + 32;
  newUnit = "°F";
} else if (unit == "fahrenheit") {
  result = (t - 32) / 1.8;
  newUnit = "°C";
} else alert("Please enter a valid unit of temperature");

console.log("The weather is " + result.toFixed(1), newUnit);
*/

//& with using function

const celciusToFahrenheit = (celcius) => {
  return (celcius * 1.8 + 32).toFixed(1);
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) / 1.8).toFixed(1);
};

// console.log(`${celciusToFahrenheit(30)} fahrenheit`);
// console.log(`${fahrenheitToCelcius(86)} celcius`);

//& extra - with using while
while (true) {
  let choice = prompt(
    "Please make your choice: 1 = C to F || 2 = F to C || q = QUIT!"
  );
  if (choice == "q") {
    break;
  } else {
    let temperature = +prompt("Enter a temperature");
    if (choice == 1) {
      console.log(`${celciusToFahrenheit(temperature)} fahrenheit`);
    } else if (choice == 2) {
      console.log(`${fahrenheitToCelcius(temperature)} celcius`);
    } else {
      console.log("Please enter a valid input");
    }
  }
}

console.log("End!");
