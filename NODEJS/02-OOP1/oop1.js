"use strict";

// nodemon oop1.js
// console.log("**");

//* ---------------------------------- */
//* OOP - Object Oriented Programming  */
//* ---------------------------------- */

const camelCaseNameObject = {
  propertyName: "value",
  methodName: function () {
    return "this is a method";
  },
};

// console.log(camelCaseNameObject);
// console.log("propertyName >>", camelCaseNameObject.propertyName);
// console.log("methodName >>", camelCaseNameObject.methodName());

//* DOT NOTATION
//* -----------------------------------

const Car = {
  brand: "Toyota",
  model: "Yaris",
  location: "Istanbul",
  year: 2011,
  colors: ["red", "green", "gray", "yellow"],
  startEngine: function () {
    return "Engine started";
  },
  details: {
    color: "red",
    engineSize: 3900,
  },
};

// console.log("all", Car);

// console.log("startEngine >>", Car.startEngine());
// console.log("startEngine >>", Car["startEngine"]());

// console.log("last color >>", Car.colors[Car.colors.length - 1]);

// console.log("engineSize >>", Car.details.engineSize);
// console.log("engineSize >>", Car.details["engineSize"]);

//* THIS & BIND Keyword
//* -------------------------------------

const user = {
  name: "Test",
  surname: "User",
  fullname: function () {
    return this.name + " " + this.surname;
  },
};

// console.log("user >>", user);
// console.log("User's fullname:", user.fullname());

// ---------------------------------------

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  description: function () {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
  age: 50,
};

//! member daki firstName ve lastName key leri ile person.fullName() icerisinde return edilen key ler ayni olmali.

let description = person.description.bind(member);
// console.log(description()); // Hege Nilsen 50
// console.log(person.description()); // John Doe 30

//* ARRAY DESTRUCTURING
//* -------------------------------------

const colors = ["red", "yellow", "orange", "white"];

// console.log("colors >>", colors);
// const color_1 = colors[0];
// const color_2 = colors[1];
// console.log("color1:", color_1);
// console.log("color2:", color_2);

// const [a, b, c] = colors; // destructuring
// console.log(a, b, c);

// ------------------------------------------

const home = {
  name: "Edward",
  surname: "Lash",
};
const employee = {
  name: "John",
  surname: "Wick",
  birthDay: 1973,
  car: {
    brand: "Toyota",
  },
};

// const { name, surname: lastName } = home;
// const { name: firstName, surname, birthDay, car } = employee;
// console.log("names >>", name, firstName);
// console.log("lastNames >>", lastName, surname);

//* SPREAD OPERATORS
//* ------------------------------------------

const newCar = {
  brand: "toyota",
  model: "yaris",
};

const Detail = {
  year: 2011,
  color: "red",
};

const CarDetails = { ...newCar, ...Detail };
// console.log("CarDetails >>", CarDetails);

const newCarDetail = { ...CarDetails, gear: "automatic" };
// console.log(newCarDetail);

//* OBJECT to JSON / JSON to OBJECT
//* ------------------------------------------

const json = JSON.stringify(newCarDetail);
// console.log("json >>", json);
const obj = JSON.parse(json);
// console.log("obj >>", obj);

//* OBJECT to ARRAY
//* ------------------------------------------

//? With using Object Entries
const entriesInArray = Object.entries(newCarDetail);
// console.log("entriesInArray >>", entriesInArray);

//? With using Object Keys
const keysInArray = Object.keys(newCarDetail);
// console.log("keysInArray >>", keysInArray);

//? With using Object Values
const valuesInArray = Object.values(newCarDetail);
// console.log("valuesInArray >>", valuesInArray);

//* Object Constructor
//* ------------------------------------------

const ConstructorFunction = function () {
  this.property = "value";
};

//* NEW keywoord

const CarConstructor = function (brand, model, year = 1973) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.carDesc = function () {
    return this.brand + " " + this.model + " " + this.year;
  };
};

const car2 = new CarConstructor("toyota", "yaris");
// console.log("car2", car2);
// console.log("carDesc >>", car2.carDesc());
