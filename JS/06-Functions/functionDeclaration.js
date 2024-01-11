// ? ==========================================================
// ?                    FUNCTIONS
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.METHODE  : FUNCTION DECLARATION
// !-----------------------------------------------------------

// A Function is designed to perform a specific task, is reusable, (it is better to have one Function for a single task) is easy to test

//! Function definition methods
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration---------------------*/
// 1-Functions are defined with the function keyword
// 2-The word function is followed by the name of the function.
// 3-Then a parenthesis is opened and closed.
//? It is necessary to call the function for it to work. If it is not called, it is not processed. This calling process is called invoke or call.

//! Defining the function with the function declaration method can be done before or after it is called. (HOISTING)

console.log("************ 1- FUNC DECLARATION *************");

//*Example1:*******************************************************/
//? Defining the function

// print();

function print() {
  console.log("Display");
}

// print();

//*Example2:*******************************************************/
//? Parameterized function

function printName(firstName, secondName, thirdName) {
  console.log(firstName, secondName, thirdName);
}

printName("Omer", "Esra", "Elif"); // Omer Esra Elif

//*Example3:*******************************************************/
//? with parameters and return value

function calculateAge(name, year) {
  console.log(`My name is ${name} and i am ${2024 - year} years old.`);
  return 2024 - year; // Return wird verwendet, um global auf die Daten in der Funktion zuzugreifen.
}

const omer = calculateAge("omer", 1990); // My name is omer and i am 34 years old.
const kaan = calculateAge("kaan", 1980); // My name is kaan and i am 44 years old.
const fatma = calculateAge("fatma", 2003); // My name is fatma and i am 21 years old.
const emre = calculateAge("emre", 1975); // My name is emre and i am 49 years old.

// Average Age
console.log((omer + kaan + fatma + emre) / 4); // 37 - Daten aus der Rücksendung (Return)
