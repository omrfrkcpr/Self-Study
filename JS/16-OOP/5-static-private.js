//* ===============================================
//*        OOP - Static and Private  (ES6)
//* ===============================================

//? Static variables and functions concern an entire class
//? Convenient for keeping or changing data.

//? If there is a need for a variable that belongs only to the relevant class, independent of the objects, then it makes sense to use a static variable.

//! ENCAPSULATION is one of the basic elements of OOP.
//! You can view the value/state within a class directly and externally from outside the class.
//! It is used to block unauthorized access.

//! Encapsulation is done with the help of private variables and private functions.
//! To declare private variables and methods in ES6 and later
//! # (hash) is used.

//! Private variables cannot be accessed directly. class to access these.
//! public access getter and setter methods defined in
//! is used.

//! Private methods cannot be accessed from outside the class.
//! Private methods can only be accessed by other methods within the class.

class Book {
  // defining private variable
  #id;

  // defining static variable
  static counter = 0;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#id = 44;
    this.getTitle = () => {
      return this.title;
    };

    Book.counter++;
    Book.id++; // doesnt work
  }

  //? Private variables can be read with the help of public methods within the class.
  //? These types of methods are called getter methods.
  //! getter methods must be defined within the class.
  getId() {
    return this.#id;
  }

  //? Private variables can be written to with the help of public methods within the class.
  //? These types of methods are called setter methods.
  //! setter methods must be defined within the class.

  setId(id) {
    return (this.#id = id);
  }
}

const book1 = new Book("simyaci", "poelho coelgo", 1988);
console.log(book1);
/*
Book {
  title: 'simyaci',
  author: 'poelho coelgo',
  year: 1988,
  getTitle: [Function (anonymous)]
}
*/
console.log(book1.id); // undefined : Parent didnt allow
console.log(book1.getId()); // 44
console.log(book1.setId(45)); // 45
console.log(book1.getId()); // 45
console.log(book1.title); // simyaci

// static variables connot be reached over instance. They can be reached with like that (className.property)
console.log(Book.counter); // 1

/* ---------------------------------- */
/*              ABSTRACT              */
/* ---------------------------------- */

function Library(a, b) {
  let name = a;
  let author = b;
  let getNoDetails = () => `${name} book is written by ${author}`;
  this.getDetails = () => `Book "${a}" belongs to author ${b}`;
}

let person = new Library("seker portakali", "José Mauro de Vasconcelos");

console.log(person.name); // undefined (private)
console.log(person.getNoDetails); // undefined (private)
console.log(person.getDetails()); // Book "seker portakali" belongs to author José Mauro de Vasconcelos
