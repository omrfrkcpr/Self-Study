//* ===============================
//* OOP - Classes (ES6)
//* ===============================

//? Classes are templates for creating objects.
//? Classes in JS are based on prototypes, but also have some syntax and semantics that differ from the ES5 syntax.
//? In fact, the class keyword was introduced in ES6, but it is syntactical sugar (a term used for a language feature added solely to make some aspects of using the language easier and more enjoyable overall), JavaScript is prototype-based.

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

const Book1 = new Book("safahat", "M.Akif Ersoy", 1910);

console.log(Book1);
/*
Book {
  title: 'safahat',
  author: 'M.Akif Ersoy',
  year: 1910,
  summaryFunc: [Function (anonymous)]
}
*/
console.log(Book1.author); // M.Akif Ersoy
console.log(Book1.calculateYear()); // 114
console.log(Book1.summaryFunc()); // safahat kitabını 1910 yılında M.Akif Ersoy yazmıştır

/* ---------------------------------- */
/*             INHERITANCE            */
/* ---------------------------------- */

class Journal extends Book {
  constructor(author, title, year, d) {
    //Inherited from ancestors with the super keyword
    super(author, title, year);

    //class's own properties
    this.mounth = d;
  }
}

const journal1 = new Journal("kasagi", "omer seyfetting", 1915, "december");
console.log(journal1);
/*
Journal {
  title: 'kasagi',
  author: 'omer seyfetting',
  year: 1915,
  summaryFunc: [Function (anonymous)],
  mounth: 'december'
}
*/

class Magazine extends Book {
  constructor(author, title, year, d, e) {
    super(author, title, year);

    this.mounth = d;
    this.price = e;
  }
}

//! When extended, we have to use every data from the ancestor. We can just leave " " blank.
const magazine1 = new Magazine("sabah", "", 1932, "july", 20);
console.log(magazine1);
/*
Magazine {
  title: 'sabah',
  author: '',
  year: 1932,
  summaryFunc: [Function (anonymous)],
  mounth: 'july',
  price: 20
}
*/
