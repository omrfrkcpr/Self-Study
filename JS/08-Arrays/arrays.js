//! ---------------------------------- */
//!               ARRAYS               */
//! ---------------------------------- */

/* ----------------------------------- */
//*           Array Defining           */
/* ----------------------------------- */

const arr = [1, "iki", 3];

const arr1 = new Array(1, "iki", 3);

console.log(arr); // [ 1, 'iki', 3 ]
console.log(arr1); // [ 1, 'iki', 3 ]

const arr2 = new Array(100);

console.log(arr2); // [ <100 empty items> ]

let emptyArr = [];

console.log(emptyArr); // []

const car = ["Ford", "Fiat", "BMW"];

car[3] = "Audi";
console.log(car); // [ 'Ford', 'Fiat', 'BMW', 'Audi' ]

car[10] = "Mercedes";
car[8] = "Ferrari";

console.log(car); // ['Ford','Fiat','BMW','Audi',<4 empty items>,'Ferrari',<1 empty item>,'Mercedes']

console.log(car[9]); // undefined
console.log(car[2]); // BMW

const arrys = [32, "1", [1, 2, 3, true], {}, false];

console.log(arrys); // [ 32, '1', [ 1, 2, 3, true ], {}, false ]
console.log(arrys[2]); // [ 1, 2, 3, true ]
console.log(arrys[2][3]); // true

/* ----------------------------------- */
//*            Array.length            */
/* ----------------------------------- */

console.log(car.length); // 11
console.log(car[car.length - 1]); // Mercedes

/* ----------------------------------- */
//*            Array check             */
/* ----------------------------------- */

//? Array is an object type

const arry = [1, 2, 3];
console.log(typeof arry); // object

console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

const fruit = ["Apple", "Kiwi", "Orange"]; // [ 'Apple', 'Kiwi', 'Orange' ]
const fruit2 = ["Apple", "Kiwi", "Orange"]; // [ 'Apple', 'Kiwi', 'Orange' ]

console.log(fruit == fruit2);
console.log(fruit === fruit2);
console.log([] == []);

const fruit3 = fruit;

console.log(fruit == fruit3);
console.log(fruit3);
console.log(fruit);

fruit[3] = "Banana"; // Fruit de yapilan degisiklikler fruit3 u de etkiler. (Heap/Stack)
console.log(fruit); // [ 'Apple', 'Kiwi', 'Orange', 'Banana' ]
console.log(fruit3); // [ 'Apple', 'Kiwi', 'Orange', 'Banana' ]

/* ----------------------------------------------- */
//*            array.slice(start,stop)             */
/* ----------------------------------------------- */
//? The original array will not be modified. (new array)

const colors = ["red", "blue", "purple", "white", "orange"];
const red = colors.slice(0, 1);
const colors2 = colors.slice(0);
colors[5] = "White";
console.log(red); // red
console.log(colors2); // [ 'red', 'blue', 'purple', 'white', 'orange' ]
console.log(colors); // [ 'red', 'blue', 'purple', 'white', 'orange', 'White' ]
console.log(colors2 == colors.slice()); // false

const colors3 = colors.slice(-2);
console.log(colors3); // [ 'orange', 'White' ]
const colors4 = colors.slice(-4, -1);
console.log(colors4); // [ 'purple', 'white', 'orange' ]
const colors5 = colors.slice(2, -2);
console.log(colors5); // [ 'purple', 'white' ]
