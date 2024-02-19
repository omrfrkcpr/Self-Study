//* ============================================
//*          OOPS- Object Constructor (ES5)
//* ============================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* All JavaScript objects inherit properties and methods from a prototype (archetype)
//* The Object prototype is at the top of the prototype inheritance chain. (Hz. Adam)
//* For example, Date and Array objects inherit from Object prototype

//* Object Constructor
//! The name Book is capitalized so that we can understand that it is a constructor. If there is a baby in the womb, it has a value if it is born (constructor at the top, baby in the womb, create book1 at the bottom = Since the birth of the baby
//!arrow function does not support this keyword, we preferred to write function declaration here.

function Book(a, b, c) {
  this.title = a;
  this.author = b;
  this.year = c;

  this.summaryFunc = function () {
    return `The book "${this.title}" is written by ${this.author} in ${this.year} `;
  };
}

const book1 = new Book("karamazov kardesler", "dostyevski", 1980);
const book2 = new Book("yaprak dokumu", "resat nuri", 1950);

console.log(book1);
console.log(book2);
console.log(book2.summaryFunc());

//! To reach the prototype area in the constructor, a syntax like the one below is used
//*We added a new parameter to the prototype field of the Book, but it does not take up space in memory, children use it when needed.

Book.prototype.type = "roman";
Book.prototype.calculateYear = function () {
  return new Date().getFullYear() - this.year;
};

// The data in the prototype field takes up space in memory. We could only reach him when we called.
console.log(book2.type);
console.log(book2.calculateYear());

/* ---------------------------------- */
/*             INHERITANCE            */
/* ---------------------------------- */

function Journal(title, author, year, d) {
  Book.call(this, title, author, year);
  this.mounth = d;
}

//*The information in the Prototype field of the Book (in ES5) does not come directly to the Magazine pattern derived from the Book object (pattern). If we want it to come, we must write the code below (before creating a child).
Journal.prototype = Object.create(Book.prototype);

const journal1 = new Journal("time", "Jonathan", 1960, "September");

console.log(journal1);
/*
Journal {
  title: 'time',
  author: 'Jonathan',
  year: 1960,
  summaryFunc: [Function (anonymous)],
  mounth: 'September'
}
*/
