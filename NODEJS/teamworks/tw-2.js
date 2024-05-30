//* 1. Question
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 == 0.3); // false
// console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

//* 2. Question
// true = 1
// console.log(1 < 2 < 3); // true
// console.log(3 > 2 > 1); // false

//* 3. Question

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
const getPositiveNumber = () => {
  rl.question("Enter a num: ", (number) => {
    const num = parseInt(number);

    if (num > 0) {
      sum += num;
      getPositiveNumber(); // recursive
    } else {
      console.log("Sum of positive nums:", sum);
      rl.close();
    }
  });
};

// getPositiveNumber();

//* 4. Question

// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(isNaN(2 + null)); // false
// console.log(isNaN(2 + undefined)); // true
// null ? console.log("true") : console.log("false"); // false
// console.log(null ? true : false); // false

//* 5. Question

var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
  while (hash.length != count) hash += "#";
  hash += "\n";
  count += n;
  n++;
}
// console.log(hash);
// #
// ##
// ###
// ####
// #####
// ######
// #######

//* 6. Question

let firstName = null;
let lastName = null;
let nickName = "coderBond";
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // coderBond

//* 7. Question

//? Functional comp.

function onZoom(x) {
  console.log("Zoom active for", x);
}
function startClass(x, y, z) {
  console.log(" Class starts at", x);
  y(z);
}

// startClass("20:00", onZoom, "FS");

//? Class comp.

class ZoomClass {
  constructor(startTime) {
    this.startTime = startTime;
  }
  onZoom(course) {
    console.log("Zoom active for", course);
  }

  startClass(course) {
    console.log("Class starts at", this.startTime);
    this.onZoom(course);
  }
}
// const myClass = new ZoomClass("20:00");
// myClass.startClass("FS");

//* 8. Question (IIFE - Immediately Invoke Function Expression)

// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// ); // f(5) = 120

//* 9. Question
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1, // local var
//       y = 2;
//     console.log(x); // 1
//   }
//   console.log(x); // undefined
//   console.log(y); // 2
// })(); //-- IIFE

//* 10. Question
let a = [10, 20, 30];
a[10] = 100;
// console.log(a[6]); // undefined
let b = [undefined];
// console.log(b[1]); // undefined
b[2] = 1;
// console.log(b); // [ undefined, <1 empty item>, 1 ]
// console.log(b.map((e) => 99)); // [ 99, <1 empty item>, 99 ]

//* 11. Question
function orderPizza(type, ingredients, callback) {
  console.log("Pizza ordered...");
  console.log("Pizza is for preparation");
  setTimeout(function () {
    let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
  $10`;
    callback(msg);
  }, 3000);
}
// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log(message);
// });

// Pizza ordered...
// Pizza is for preparation
// Your Vegeterian Cheese Pizza is ready! The total bill is
//   $10`

//* 12. Question

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    console.log(this.id + " " + this.name);
  }
}

let e1 = new Employee(10, "Qadir Adamson");
let e2 = new Employee("Victor Hug");
let e3 = new Employee(12);
// e1.detail(); // 10 Qadir Adamson
// e2.detail(); // Victor Hug undefined
// e3.detail(); // 12 undefined

//* 13. Question

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sound() {
    return `${this.name} is says`;
  }
}

class Cat extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }
  sound() {
    return `${super.sound()} Meow!`;
  }
}
let felix = new Cat("felix", 5);
// console.log(felix.sound()); // felix is says Meow!
