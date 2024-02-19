//* ===================================================
//* OOP - Inheritance and Polymorphism(ES6)
//* (inheritance, inheritance) and (polymorphism)
//* ===================================================

//? The extends keyword is used to extend the functionality of the parent class to the child class. (INHERITANCE)

// Polymorphism is a programming concept based on the object-oriented programming concept. It expresses the ability of a variable, object, or function to take more than one form.

// In the OOP, Polymorphism is usually achieved with Overloading and Overriding (overriding=if you define two functions with the same name, the last one defined will override the predefined version and each time a call is made to the function, the last defined function will be executed).)(overloading=means overloading, in javascript It is not called like that, it is called processing the function with the same names and js does not support direct overloading, manual work is required)

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.summaryFunc = function () {
      return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`;
    };
  }

  // What we write in this sub-array goes directly to the prototype area of the pattern (without specifying it with ES6)
  calculateYear() {
    return new Date().getFullYear() - this.year;
  }
}

//! OVERRIDING

class Journal extends Book {
  constructor(title, author, year, mounth) {
    super(title, author, year);
    this.mounth = mounth;

    // overriding function
    this.summaryFunc = function () {
      return `${this.author} wrote the book "${this.title}" in ${this.year}`;
    };
  }

  // overriding function
  calculateYear() {
    return `${this.title}'s year isn't known.`;
  }
}

const journal1 = new Journal("sientific essays", "Einstein", 1900, "oktober");
console.log(journal1);
/*
Journal {
  title: 'sientific essays',
  author: 'einstein',
  year: 1900,
  summaryFunc: [Function (anonymous)],
  mounth: 'oktober'
}
*/
console.log(journal1.summaryFunc()); // Einstein wrote the book "sientific essays" in 1900
console.log(journal1.calculateYear()); // sientific essays's year isn't known.

//!OVERLOADING
// Unlike other programming languages, JavaScript does not support Function Overloading.
// Here's a little code to show that JavaScript doesn't support Function Overloading.

function arg(arg1) {
  console.log(arg1);
}

function arg(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

arg("hi"); // hi undefined undefined
arg("hi", "how are u?", "are u okay?"); // hi how are u? are u okay?

// The reason for "undefined" in the output is this: If two functions are defined with the same name in JavaScript, the last defined function overwrites the previous function.
// In this case, gel(arg1) is overwritten by gel(arg1,arg2,arg3) , but
// we passed only one Argument ("hi") to the function. This means that the second and third argument are undefined, so when we try to print the second argument, it is printed as "undefined".
// We saw that the overloading function is not supported in JavaScript, but we can implement the overloading function on our own; this is quite complicated when there are larger numbers and more types of arguments involved. The code below will help you understand how to implement overloading functionality in JavaScript.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/
