//* ===============================================
//*                    (OOP)
//*         Object Oriented Programming
//* ===============================================

//*object literals

const book1 = {
  title: "Yaprak Dokumu",
  yazar: "Resat Nuri",
  year: 1950,

  summaryFunc: function () {
    console.log(
      `${this.title} book is written in ${this.year} by ${this.yazar}`
    );
  },
};

book1.summaryFunc();

//? Creating a large number of new Objects with the object literals method is quite laborious, and it is also not suitable in terms of programming approach as it involves a lot of repetition.
// Not suitable for DRY (Dont Repeat Yourself) Principle
//? SOLUTION: Use Object Constructor (ES5 and ES6)
